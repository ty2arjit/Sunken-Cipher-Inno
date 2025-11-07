// GameContext.js
'use client'
import { createContext, useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import axios from 'axios';
export const GameContext = createContext();
import { questions } from '@/data/questions';
import { set } from 'zod';

export const GameProvider = ({ children }) => {
  let mazeMatrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] , // Row 1 (all walls)
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // Row 2
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 3, 1, 0, 1, 4, 1], // Row 3
    [1, 0, 1, 0, 2, 0, 0, 0, 1, 0, 1, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 4, 0, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1], // Row 4
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 3, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1], // Row 5
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1], // Row 6
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 3, 1, 0, 1], // Row 7
    [1, 0, 1, 0, 1, 3, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], // Row 8
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1], // Row 9
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1], // Row 10
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1], // Row 11
    [1, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 1], // Row 12
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1], // Row 13
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 4, 1], // Row 14
    [1, 0, 1, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1], // Row 15
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1], // Row 16
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1], // Row 17
    [1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 2, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 3, 0, 0, 0, 0, 0, 2, 1, 0, 5], // Row 18
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0], // Row 19
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1], // Row 20
    [1, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1], // Row 21
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1], // Row 22
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // Row 23
  ];
    const [mazeLayout, setMazeLayout] = useState(mazeMatrix);
    
  //console.log(mazeLayout);
  const numRows = mazeLayout.length;          
  const numCols = mazeLayout[0].length; 
  const [ratPosition, setRatPosition] = useState({ row: 5, col: 0 });
  const [lifelines, setLifelines] = useState(3);
  const [score, setScore] = useState(0);
  const [easycnt, setEasycnt] = useState(0);
  const [mediumcnt, setMediumcnt] = useState(0);
  const [hardcnt, setHardcnt] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isGameOver, setIsGameOver] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(null);
  const [diff,setdiff]=useState(0);
  const [showBackButton, setShowBackButton] = useState(false);
  
  const correctSound = typeof window !== "undefined" ? new Audio('/sounds/correct.mp3') : null;
  const wrongSound = typeof window !== "undefined" ? new Audio('/sounds/wrong.mp3') : null;
  const beepAudio = typeof window !== 'undefined' ? new Audio('/sounds/beep.mp3') : null;


  const endGame = async (timeTaken) => {
    if (!gameStarted) return; 
    
    const dateStarted = new Date(gameStarted);
    if (isNaN(dateStarted.getTime())) {
      console.error("Invalid gameStarted timestamp");
      return;
    }
  
    const formattedGameStarted = dateStarted.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(',', ''); 
  
    try {
      const response = await axios.post("/api/game", {
        timeTaken,
        points: score,
        gameStarted: formattedGameStarted,
      });
  
      console.log("Game ended, result saved:", response.data);
  
    } catch (error) {
      console.error("Failed to save game result:", error.response?.data || error.message);
    } finally {
       try {
        await signOut({ callbackUrl: '/' });
      } catch (error) {
        console.error("Error signing out:", error);
      }
    }
  };
  
  
  

   const getQuestion = (difficulty) => {
    setdiff(difficulty);
    let questionSet;
    if (difficulty === 2) {
      questionSet = questions.easy;
    }
    else if (difficulty === 3) {
      questionSet = questions.medium;
    }
    else if (difficulty === 4) {
      questionSet = questions.hard;
    }
    

    const unansweredQuestions = questionSet.filter(q => !answeredQuestions.has(q.id));

    if (unansweredQuestions.length > 0) {
      const randomQuestion = unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)];
      setCurrentQuestion(randomQuestion);
      setIsQuestionModalOpen(true);
    }
  };
  const handleAnswerSubmission = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + (diff-1)*10); 
      if ( diff == 2) {
        setEasycnt(easycnt + 1);
      }
      if ( diff == 3) {
        setMediumcnt(mediumcnt + 1);
      }
      if( diff == 4) {
        setHardcnt(hardcnt + 1);
      }
      if( diff == 5) {
        setHardcnt(hardcnt + 3);
      }
      if (correctSound) correctSound.play();
    } else {
      setLifelines(lifelines - 1); 
      if (wrongSound) wrongSound.play();
    }
    setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion.id])); 
    const updatedMaze = [...mazeLayout];
    updatedMaze[ratPosition.row][ratPosition.col] = 0; 
    setMazeLayout(updatedMaze); 
    // setIsQuestionModalOpen(false);
    // setCurrentQuestion(null); 
    setTimeout(() => {
      setIsQuestionModalOpen(false);
      setCurrentQuestion(null);
    }, 2000);
  };
  // Timer logic
  useEffect(() => {
    if (isGameOver) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0 || lifelines === 0) {
      setIsGameOver(true);
    }

    if (timeLeft === 4 && beepAudio) {
      beepAudio.play();
    }

    return () => clearInterval(timer);
  }, [timeLeft, lifelines ,isGameOver]);

  
  // const handleMove = (newRow, newCol) => { 
  //   if (!isGameOver) {
  //     // Check if the new cell is the destination (value 5)
  //     if (mazeLayout[newRow][newCol] === 5) {
  //       setScore((prevScore) => prevScore + 60);  // Add 60 points
  //       setIsGameOver(true); // Mark the game as over
  //       return;
  //     }
  
  //     setRatPosition({ row: newRow, col: newCol });
  //   }
  // };
  
  const handleMove = (newRow, newCol) => { 
    // Prevent movement if a question modal is open or the game is over
    if (isQuestionModalOpen || isGameOver) return;
  
    // Check if the new cell is the destination (value 5)
    if (mazeLayout[newRow][newCol] === 5) {
      setScore((prevScore) => prevScore + 90);  
      setIsGameOver(true); 
      return;
    }
      if ([2, 3, 4].includes(mazeLayout[newRow][newCol])) {
      getQuestion(mazeLayout[newRow][newCol]); 
    }
  
    setRatPosition({ row: newRow, col: newCol });
  };
  
  

  const contextValue = {
    endGame,
    setGameStarted,
    ratPosition,
    lifelines,
    score,
    easycnt,
    setEasycnt,
    mediumcnt,
    setMediumcnt,
    hardcnt,
    setHardcnt,
    timeLeft,
    isGameOver,
    setIsGameOver,
    mazeLayout,
    handleMove,
    getQuestion,             
    isQuestionModalOpen,     
    currentQuestion,         
    handleAnswerSubmission,  
    numRows,
    numCols ,
    showBackButton ,
    setShowBackButton
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};
