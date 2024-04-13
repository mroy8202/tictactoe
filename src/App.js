import './App.css';
import Score from './Components/Score'
import GameGrid from './Components/GameGrid'
import GameButton from './Components/GameButton'
import { useEffect, useState } from 'react';

let initialGridPos = ['', '', '', '', '', '', '', '', ''];
function App() {

  const [gridPos, setGridPos] = useState(initialGridPos);
  const [count, setCount] = useState(0);
  const [win, setWin] = useState({"X": 0, "O": 0});
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  function resetHandler() {
    // delete from localStorage first
    localStorage.removeItem('win');

    // reset gridPos
    gridPos.map((val, ind) => {
      return gridPos[ind] = "";
    })
    setGridPos(gridPos);

    // reset winner
    setWinner("");

    // reset player
    setCurrentPlayer("X");
    setGameOver(false);
    setCount(0);

    // reset winCounts
    setWin({"X": 0, "O": 0}); 
  }

  function newGameHandler() {
    // reset gridPos
    gridPos.map((val, ind) => {
      return gridPos[ind] = "";
    })
    setGridPos(gridPos);

    // reset winner
    setWinner("");

    // reset player
    setCurrentPlayer("X");
    setGameOver(false);
    setCount(0);
  }

  useEffect(() => {
    console.log("Updated winner:", winner);
  }, [winner]);

  return (
    <div className='bg-gray-900 h-screen w-screen text-white flex flex-col gap-4 items-center'>
      {/* Score */}
      <Score 
        currentPlayer={currentPlayer} 
        win={win} setWin={setWin} 
        winner={winner} 
      />

      {/* GameGrid */}
      <GameGrid 
        gridPos={gridPos} 
        setGridPos={setGridPos}
        currentPlayer={currentPlayer} 
        setCurrentPlayer={setCurrentPlayer} 
        winner={winner} 
        setWinner={setWinner} 
        count={count} 
        setCount={setCount}  
        gameOver={gameOver}
        setGameOver={setGameOver}
        />

      <div className='flex gap-4 w-72'>
        {/* NewGame Button */}
        <GameButton 
          value="New Game" 
          onClick={() => newGameHandler()}  
        />

        {/* Reset Button */}
        <GameButton 
          value="Reset" 
          onClick={() => resetHandler()} 
        />
      </div>
      
    </div>
  );
}

export default App;
