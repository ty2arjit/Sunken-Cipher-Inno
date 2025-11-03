import React from 'react';
export const Instructions = () => {
  return (
    <div className="relative w-[70%] p-4 bg-slate-900 text-slate-50 rounded-lg shadow-lg shadow-cyan-600/60 mx-auto">

      <div className="absolute inset-0 backdrop-blur-md rounded-lg border-[1px] border-white/10 shadow-inner" />
      <div className="relative z-10 space-y-2 text-sm md:text-base">
        <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-1">
          Game Instructions
        </h2>
        
        <p><strong className="text-cyan-300">Objective:</strong> Guide the diver through the maze to reach the destination, collecting pearls by answering questions along the way. Choose the optimal path to maximize your pearl count and reach the end within the time limit.</p>
        
        <p><strong className="text-cyan-300">How to Play:</strong></p>
        <p>1. Use the <strong className="text-pink-300">arrow keys</strong> to move the diver up, down, left, or right within the maze.</p>
        <p>2. On some paths, you’ll encounter questions:</p>
        
        <ul className="list-none pl-3 space-y-1">
          <li><strong className="text-lime-200" >3 Easy Questions:</strong> Awards <strong className="text-lime-200">1 pearl</strong></li>
          <li><strong className="text-amber-200">2 Medium Questions:</strong> Awards <strong className="text-amber-200">1 pearl</strong></li>
          <li><strong className="text-red-200">1 Hard Question:</strong> Awards <strong className="text-red-200">1 pearl</strong></li>
          <li><strong className="text-fuchsia-200">Reaching Destination:</strong> Awards <strong className="text-fuchsia-200">3 pearls</strong></li>
          <li><strong className="text-fuchsia-200">Number of pearls collected is equivalent to number of puzzle pieces collected.</strong></li>
        </ul>
        
        <p>3. The maze has multiple paths leading to the destination. Choose your path wisely to reach the destination with the highest possible pearl count.</p>
        
        <p><strong className="text-cyan-300">Game Rules:</strong></p>
        <p>1. You have a total of <strong className="text-pink-300">10 minutes</strong> to complete the maze.</p>
        <p>2. You start with <strong className="text-pink-300">3 oxygen tanks</strong>. Each wrong answer reduces one oxygen cylinder. Game over if all oxygen tanks are lost before reaching the destination.</p>
        
        <p><strong className="text-cyan-300">Goal:</strong> Complete the maze in the shortest time, maximize your pearl count, and make it to the end without running out of oxygen tanks!</p>
      </div>
    </div>
  );
};
