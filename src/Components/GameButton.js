import React from 'react'

const GameButton = ({value, onClick}) => {
  return (
    <button className='border rounded-md w-36 p-2 bg-slate-800 hover:bg-slate-900 font-semibold' onClick={onClick}>
      {value}
    </button>
  )
}

export default GameButton