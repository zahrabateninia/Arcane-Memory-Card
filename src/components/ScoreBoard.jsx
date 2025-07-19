import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({ score, bestScore }) => {
  return (
    <div className='score-board'>
        <p>score: { score }</p>
        <p>best score: { bestScore }</p>
      
    </div>
  )
}

export default ScoreBoard
