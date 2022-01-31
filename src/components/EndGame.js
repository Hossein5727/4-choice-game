import React from 'react'

function EndGame({ setStop, setQuestionNumber }) {
    return (
        <div className='end_game'>
            <h1>You Lose 🤣🤣🤣</h1>
            <button onClick={() => {
                setStop(false)
                setQuestionNumber(1)
            }} className='tryAgin_btn'>Try again</button>
        </div>
    )
}

export default EndGame
