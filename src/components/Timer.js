import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import wrong from '../assets/sounds/wrong.mp3'

function Timer({ setStop, questionNumber }) {

    const [count, setCount] = useState(30)
    const [wrongAnswer] = useSound(wrong)

    useEffect(() => {
        if (count === 0) {
            setStop(true)
            wrongAnswer()
        }
        const interval = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [count, setStop])

    useEffect(() => {
        setCount(30)
    }, [questionNumber])

    return (
        count
    )
}

export default Timer
