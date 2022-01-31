import { useState } from 'react';
import './App.css';
import EndGame from './components/EndGame';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import { moneyPyramid } from './data/pyramidData';
import { questionDataPersian } from './data/questionDataPersian';
import { questionsData } from './data/questionsData';

function App() {

  const [questionNumber, setQuestionNumber] = useState(6)
  const [stop, setStop] = useState(false)
  const [isPersian, setIsPersian] = useState(false)

  console.log(questionNumber);

  return (
    <div className='app'>
      <main className='main'>
        {!isPersian && questionNumber <= questionsData.length && (
          <>
            <button className='isPerisan' onClick={() => setIsPersian(true)}>اگه میخوای زبون مسابقه فارسی بشه بمال روم😉</button>
            <button className='isPerisan_mobile' onClick={() => setIsPersian(true)}>فارسی بشه؟؟</button>
          </>
        )}
        {!stop ? (
          <>
            <div className='top'>
              {questionNumber <= questionsData.length && (
                <div className='timer'>
                  <Timer
                    setStop={setStop}
                    questionNumber={questionNumber}
                  />
                </div>
              )}
            </div>
            <div className='bottom'>
              <Trivia
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                data={questionsData}
                persianData={questionDataPersian}
                isPersian={isPersian}
              />
            </div>
          </>
        ) : (
          <EndGame
            setQuestionNumber={setQuestionNumber}
            setStop={setStop}
          />
        )}
        {questionNumber > questionsData.length && (<h1 className='win'>You Win👍</h1>)}
      </main>

      <div className='pyramid'>
        {moneyPyramid.map(item => (
          <div key={item.id} className={questionNumber === item.id ? "pyramidItem active" : "pyramidItem"}>
            <p className='pyramidItemId'>{item.id}</p>
            <p>{item.amount}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
