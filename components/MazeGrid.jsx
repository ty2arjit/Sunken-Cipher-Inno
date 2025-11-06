// import { useContext, useEffect, useRef } from 'react';
// import { GameContext } from '@/Context/GameContext';

// const MazeGrid = () => {
//   const { ratPosition, mazeLayout, handleMove, getQuestion, isQuestionModalOpen, numRows, numCols } = useContext(GameContext);
//   const mazeRef = useRef(null);

//   const ratImage = '/Images/catim.png';
//   const easyQuestionImage = '/Images/easy.png';
//   const mediumQuestionImage = '/Images/medium.png';
//   const hardQuestionImage = '/Images/hard.png';
//   const goalImage = '/Images/trophy.png';
//   const mazeBackgroundImage = '/Images/maze.png';


//   useEffect(() => {
//     if (mazeRef.current) {
//       mazeRef.current.focus();
//     }
//   }, []);

//   useEffect(() => {
//     if (!isQuestionModalOpen && mazeRef.current) {
//       mazeRef.current.focus();
//     }
//   }, [isQuestionModalOpen]);

//   const isValidMove = (row, col) => {
//     if (row < 0 || col < 0 || row >= numRows || col >= numCols) {
//       return false;
//     }
//     return mazeLayout[row][col] !== 1;
//   };

//   const handleKeyDown = (event) => {
//     event.preventDefault();
//     const { row, col } = ratPosition;
//     let newRow = row;
//     let newCol = col;

//     switch (event.key) {
//       case 'ArrowUp':
//         newRow = row - 1;
//         break;
//       case 'ArrowDown':
//         newRow = row + 1;
//         break;
//       case 'ArrowLeft':
//         newCol = col - 1;
//         break;
//       case 'ArrowRight':
//         newCol = col + 1;
//         break;
//       default:
//         return;
//     }

//     if (isValidMove(newRow, newCol)) {
//       handleMove(newRow, newCol);
//       const cellType = mazeLayout[newRow][newCol];
//       if (cellType === 2 || cellType === 3 || cellType === 4) {
//         getQuestion(cellType); // Open question modal based on difficulty
//       }
//     }
//   };

//   const gridWidth = numCols // Number of columns (35 in this case)
//   const gridHeight = numRows;

//   return (
//     <div
//       className="grid gap-0 h-full w-full outline-none relative"
//       tabIndex="0"
//       ref={mazeRef}
//       onKeyDown={handleKeyDown}
//       style={{
//         gridTemplateColumns: `repeat(${gridWidth}, 1fr)`,
//       }}
//     >
//       {mazeLayout.map((row, rowIndex) =>
//         row.map((cell, colIndex) => {
//           let classNames = '';
//           let backgroundImage = '';
//           let cellStyle = {};

//           if (ratPosition.row === rowIndex && ratPosition.col === colIndex) {
//             classNames = 'relative flex items-center justify-center';
//             backgroundImage = `url(${ratImage})`;
//             cellStyle = {
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundImage: backgroundImage,
//               width: '250%',
//               height: '250%',
//               margin: '-18px',
//             };
//           } else if (cell === 1) {
//             // classNames = 'bg-gradient-to-r from-cyan-900 to-blue-200 drop-shadow-lg' ; // Wall cell

//             classNames = 'bg-gradient-to-r from-cyan-900 to-blue-700 shadow-2xl border-2 border-cyan-400 transform scale-105 hover:scale-110 transition duration-300 ease-out floating parallax';

//             cellStyle = {
//               boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.5), inset 0px -4px 12px rgba(0, 0, 0, 0.3), inset 0px 4px 8px rgba(255, 255, 255, 0.2)',
//               borderRadius: '12px',
//               backgroundImage: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.3), rgba(0, 0, 128, 0.8))',
//             };
//           } else if (cell === 0) {
//             classNames = 'bg-black'; // Path cell
//           } else if (cell === 2) {
//             classNames = 'relative flex items-center justify-center';
//             backgroundImage = `url(${easyQuestionImage})`;
//             cellStyle = {
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundImage: backgroundImage,
//               width: '200%',
//               height: '200%',
//               margin: '-12px',
//             };
//           } else if (cell === 3) {
//             classNames = 'relative flex items-center justify-center';
//             backgroundImage = `url(${mediumQuestionImage})`;
//             cellStyle = {
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundImage: backgroundImage,
//               width: '200%',
//               height: '200%',
//               margin: '-12px',
//             };
//           } else if (cell === 4) {
//             classNames = 'relative flex items-center justify-center';
//             backgroundImage = `url(${hardQuestionImage})`;
//             cellStyle = {
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundImage: backgroundImage,
//               width: '200%',
//               height: '200%',
//               margin: '-12px',
//             };
//           } else if (cell === 5) {
//             // Destination cell (exit)
//             classNames = 'relative flex items-center justify-center';
//             backgroundImage = `url(${goalImage})`;
//             cellStyle = {
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundImage: backgroundImage,
//               width: '200%', // Make it larger than the cell
//               height: '200%',
//               margin: '-13px',
//             };
//           }

//           return (
//             <div
//               key={`${rowIndex}-${colIndex}`}
//               className={`flex items-center justify-center ${classNames}`}
//               style={cellStyle}
//             />
//           );
//         })
//       )}
//     </div>
//   );

// };

// export default MazeGrid;


import { useContext, useEffect, useRef } from 'react';
import { GameContext } from '@/Context/GameContext';

const MazeGrid = () => {
  const { ratPosition, mazeLayout, handleMove, getQuestion, isQuestionModalOpen, numRows, numCols } = useContext(GameContext);
  const mazeRef = useRef(null);

  const ratImage = '/Images/catim.png';
  const easyQuestionImage = '/Images/easy_new.png';
  const mediumQuestionImage = '/Images/Med_new.png';
  const hardQuestionImage = '/Images/hard_new.png';
  const goalImage = '/Images/Treasure.png';

  useEffect(() => {
    if (mazeRef.current) {
      mazeRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!isQuestionModalOpen && mazeRef.current) {
      mazeRef.current.focus();
    }
  }, [isQuestionModalOpen]);
// Refocus on the maze when clicking anywhere on the screen
  useEffect(() => {
    const handleClick = () => {
      if (mazeRef.current) {
        mazeRef.current.focus();
      }
    };

    document.addEventListener('click', handleClick);

  
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const isValidMove = (row, col) => {
    if (row < 0 || col < 0 || row >= numRows || col >= numCols) {
      return false;
    }
    return mazeLayout[row][col] !== 1;
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
    const { row, col } = ratPosition;
    let newRow = row;
    let newCol = col;
  
    switch (event.key) {
      case 'ArrowUp':
      case 'w': 
        newRow = row - 1;
        break;
      case 'ArrowDown':
      case 's': 
        newRow = row + 1;
        break;
      case 'ArrowLeft':
      case 'a': 
        newCol = col - 1;
        break;
      case 'ArrowRight':
      case 'd': 
        newCol = col + 1;
        break;
      default:
        return;
    }
  
    if (isValidMove(newRow, newCol)) {
      handleMove(newRow, newCol);
      const cellType = mazeLayout[newRow][newCol];
      if (cellType === 2 || cellType === 3 || cellType === 4) {
        getQuestion(cellType); 
      }
    }
  };
  

  const isInRange = (row, col) => {
    const rowDistance = Math.abs(row - ratPosition.row);
    const colDistance = Math.abs(col - ratPosition.col);
    return rowDistance <= 10 && colDistance <= 12;
  };

  return (
    <div
      className="grid gap-0 h-full w-full outline-none relative"
      tabIndex="0"
      ref={mazeRef}
      onKeyDown={handleKeyDown}
      style={{
        gridTemplateColumns: `repeat(${numCols}, 1fr)`,
      }}
    >
      {mazeLayout.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          let classNames = '';
          let backgroundImage = '';
          let cellStyle = {};

          if (ratPosition.row === rowIndex && ratPosition.col === colIndex) {
            classNames = 'relative flex items-center justify-center transition duration-300 ease-out floating parallax';
            backgroundImage = `url(${ratImage})`;
            cellStyle = {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: backgroundImage,
              width: '250%',
              height: '250%',
              margin: '-18px',
            };
          } else if (cell === 1) {
            classNames = 'bg-gradient-to-r from-green-900 to-blue-700 shadow-2xl border-2 border-cyan-400 transform scale-105 hover:scale-110 transition duration-300 ease-out floating parallax';
            cellStyle = {
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.5), inset 0px -4px 12px rgba(0, 0, 0, 0.3), inset 0px 4px 8px rgba(255, 255, 255, 0.2)',
              borderRadius: '25px',
              backgroundImage: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.3), rgba(0, 0, 128, 0.8))',
            };
          } else if (cell === 0) {
            //classNames = 'bg-black'; // Path cell
          } else if ((cell === 2 || cell === 3 || cell === 4) && isInRange(rowIndex, colIndex)) {
            // Show question image if within range
            classNames = 'relative flex items-center justify-center transition duration-300 ease-out floating parallax';
            backgroundImage = `url(${
              cell === 2 ? easyQuestionImage : cell === 3 ? mediumQuestionImage : hardQuestionImage
            })`;
            cellStyle = {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: backgroundImage,
              width: '220%',
              height: '220%',
              margin: '-14px',
            };
          } else if (cell === 5) {
            // Destination cell (exit)
            classNames = 'relative flex items-center justify-center transition duration-300 ease-out floating parallax';
            backgroundImage = `url(${goalImage})`;
            cellStyle = {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: backgroundImage,
              width:'200%', 
              height: '300%',
              margin: '-13px',
              
            };
          }

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`flex items-center justify-center ${classNames}`}
              style={cellStyle}
            />
          );
        })
      )}
    </div>
  );
};

export default MazeGrid;
