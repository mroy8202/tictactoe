import React, { useEffect } from 'react'
import PlayerImage from './PlayerImage'
import toast from 'react-hot-toast'

const Score = ({currentPlayer, win, setWin, winner}) => {
  // console.log("WIn X: ", win.X);
  // console.log("WIn O: ", win.O);
  // console.log("winnnnn: ", win);

  useEffect(() => {
    if(winner !== "") {
      // declare winner
      toast.success(`${winner} has won`)
      setWin(prevState => ({
        ...prevState,
        [winner]: prevState[winner] + 1 // Increment the winner's score
      }));
    }
  }, [winner, setWin])

  useEffect(() => {
    // Update local storage whenever win changes
    localStorage.setItem('win', JSON.stringify(win));
  }, [win, setWin]);

  useEffect(() => {
    const savedWin = localStorage.getItem('win');
    if(savedWin) setWin(JSON.parse(savedWin));
  }, [win, setWin]);

  return (
    <div className='border rounded-lg w-72 py-2 mt-10 gap-2 bg-slate-800 h-12 flex justify-evenly'>
      <div className='flex items-center justify-center'>
          <PlayerImage currentPlayer={"X"} />
          <div className='font-semibold text-2xl ml-1'>: {win.X}</div>
      </div>

      <div className='flex items-center'>
          <PlayerImage currentPlayer={"O"} />
          <div className='font-semibold text-2xl ml-1'>: {win.O}</div>
      </div>
    </div>
  )
}

export default Score