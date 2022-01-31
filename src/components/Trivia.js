import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from '../assets/sounds/play.mp3'
import correct from '../assets/sounds/correct.mp3'
import wrong from '../assets/sounds/wrong.mp3'
import { questionDataPersian } from '../data/questionDataPersian'

const Trivia = ({ isPersian, setStop, questionNumber, setQuestionNumber, data, persianData }) => {

    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("asnwer")

    const [playMusic] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)


    useEffect(() => {
        playMusic();
    }, [playMusic])

    useEffect(() => {
        if (!isPersian) {
            setQuestion(data[questionNumber - 1])
        }
        else if (isPersian) {
            setQuestion(persianData[questionNumber - 1])
        }
    }, [questionNumber, data, isPersian])


    const delay = (timeout, callback) => {
        setTimeout(() => {
            callback()
        }, timeout);
    }

    const handleClick = (item) => {
        setSelectedAnswer(item)
        setClassName("asnwer active_answer")
        delay(3000, () => {
            setClassName(item.correct ? "asnwer correct_answer" : "asnwer wrong")
        })
        delay(5000, () => {
            if (item.correct) {
                correctAnswer()
                delay(1000, () => {

                    setQuestionNumber(prev => prev + 1)
                    setSelectedAnswer(null)
                })
            }
            else {
                wrongAnswer()
                delay(1000, () => {
                    setStop(true)
                    setSelectedAnswer(null)
                })
            }
        })
    }

    return (
        <>
            {question && question.question && (
                <div className='trivia'>

                    <div className='questions_trivia'>
                        <h2>{question.question}</h2>
                    </div>

                    <div className='asnwers_tivia'>
                        {question.answers.map((item, index) => (
                            <p key={index} className={selectedAnswer === item ? className : "asnwer"} onClick={() => handleClick(item)}>{item.text}</p>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Trivia
