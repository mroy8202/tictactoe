import React from 'react'
import player_X from '../assets/player_X.png'
import player_O from '../assets/player_O.png'

const PlayerImage = ({currentPlayer}) => {
  return (
    <div className='h-full'>
      {
        currentPlayer === "X"
        ?
        <img src={player_X} alt='X' className='h-full' />
        :
        <img src={player_O} alt='O' className='h-full' />
      }
    </div>
  )
}

export default PlayerImage