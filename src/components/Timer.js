import React, { useEffect, useState } from 'react'

function Timer({ setStop, questionNumber }) {

    const [count, setCount] = useState(30)

    useEffect(() => {
        if (count === 0) {
            setStop(true)
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
