import React from 'react';
import PlayerImage from './PlayerImage';
import toast from 'react-hot-toast';

const GameGrid = ({gridPos, setGridPos, currentPlayer, setCurrentPlayer, winner, setWinner, count, setCount, gameOver, setGameOver}) => {
  console.log("current player: ", currentPlayer);

  const winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function gridClickHandler(ind) {
    if(gameOver) return ;

    // check if grid's box is empty or not
    else if(gridPos[ind] === "") {
      gridPos[ind] = currentPlayer;
      setGridPos(gridPos);

      console.log("gridPOS ---->>>>>> ", gridPos[ind]);

      console.log("Grid Positions: ", gridPos);
      setCount(count => count+1);

      if(checkIfWin()) return ;

      // change currentPlayer
      if(currentPlayer === "X") setCurrentPlayer("O");
      else setCurrentPlayer("X");
    } 
    
  }

  console.log("count: ", count);
  if(count === 9) {
    toast.success("It's a tie");
    setCount(0);
  }

  function checkIfWin() {
    winningPosition.forEach( (position) => {
      // all 3 boxes should be not empty and value should be same
      if((gridPos[position[0]] !== "" && gridPos[position[1]] !== "" && gridPos[position[2]] !== "") &&
      (gridPos[position[0]] === gridPos[position[1]] && gridPos[position[1]] === gridPos[position[2]])) {
        // check, who is winner
        if(gridPos[position[0]] === "X") setWinner("X");
        else setWinner("O");

        // setCount to 0
        setCount(0);
        
        setGameOver(true);
        setCurrentPlayer("X");
        setTimeout(() => {
          toast.success("Click on New Game")
        }, 1000);
      }
    } )
  }


  return (
    <div className='border rounded-lg border-slate-700 h-72 w-72 p-4 bg-slate-800'>

      <div className='w-full h-1/3 flex'>
        <div className='w-1/3 border-r-2 border-b-2' onClick={() => gridClickHandler(0)}>
          { gridPos[0] !== "" && <PlayerImage currentPlayer={gridPos[0]} /> } 
        </div>
        <div className='w-1/3 border-r-2 border-b-2' onClick={() => gridClickHandler(1)}>
          {gridPos[1] !== "" && <PlayerImage currentPlayer={gridPos[1]} />} 
        </div>
        <div className='w-1/3 border-b-2' onClick={() => gridClickHandler(2)}>
          { gridPos[2] !== "" && <PlayerImage currentPlayer={gridPos[2]} /> }
        </div>
      </div>

      <div className='w-full h-1/3 flex'>
        <div className='w-1/3 border-r-2 border-b-2' onClick={() => gridClickHandler(3)}>
          { gridPos[3] !== "" && <PlayerImage currentPlayer={gridPos[3]} /> }
        </div>
        <div className='w-1/3 border-r-2 border-b-2' onClick={() => gridClickHandler(4)}>
          { gridPos[4] !== "" && <PlayerImage currentPlayer={gridPos[4]} /> }
        </div>
        <div className='w-1/3 border-b-2' onClick={() => gridClickHandler(5)}>
          { gridPos[5] !== "" && <PlayerImage currentPlayer={gridPos[5]} /> }
        </div>
      </div>

      <div className='w-full h-1/3 flex'>
        <div className='w-1/3 border-r-2' onClick={() => gridClickHandler(6)}>
          { gridPos[6] !== "" && <PlayerImage currentPlayer={gridPos[6]} /> }
        </div>
        <div className='w-1/3 border-r-2' onClick={() => gridClickHandler(7)}>
          { gridPos[7] !== "" && <PlayerImage currentPlayer={gridPos[7]} /> }
        </div>
        <div className='w-1/3' onClick={() => gridClickHandler(8)}>
          { gridPos[8] !== "" && <PlayerImage currentPlayer={gridPos[8]} /> }
        </div>
      </div>
    </div>
  )
}

export default GameGrid