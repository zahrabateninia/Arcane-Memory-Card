import React from 'react'
import './StartPage.css'

const StartPage = ({startGame}) => {
  return (
    <div className='start-page'>
        <div className='start-page-card'>
                <h1 className='game-title'>Arcane Memory Game</h1>
                <div className="difficulty-buttons">
                    <button className='easy-btn' onClick={()=>startGame('easy')}>Easy</button>
                    <button className='medium-btn' onClick={()=>startGame('medium')}>Medium</button>
                    <button className='difficult-btn' onClick={()=>startGame('difficult')}>Difficult</button>
                </div>
      
      </div>

    </div>
  )
}

export default StartPage
