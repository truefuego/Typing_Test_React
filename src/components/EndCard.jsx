import React from 'react'
import RestartButton from './RestartButton'

export default function EndCard(props) {
    const time = props.time
    const mainPara = props.mainPara
    const userPara = props.finalPara

    const countMistakes = () => {
        let mistakes = 0;
        let mainWord = "";
        let userWord = "";
        for(let i = 0 ; i < mainPara.length - 1 ; i++) {
            if(mainPara[i] === ' ') {
                if(mainWord !== userWord) {
                    mistakes++;
                }
                mainWord = "";
                userWord = "";
            }
            else {
                mainWord += mainPara[i];
                userWord += userPara[i];
            }
        }
        if(mainWord !== userWord) {
            mistakes++;
        }
        return mistakes;
    }

    const countWords = () => {
        let c = 1;
        for(let i = 0 ; i < mainPara.length ; i++) {
            if(mainPara[i] === ' ') {
                c++;
            }
        }
        return c;
    }

    let words = countWords()
    let mistakes = countMistakes()
    let wpm = (((words-mistakes) / time) * 60).toFixed(2)
    let accuracy = ((words - mistakes) * 100 / words).toFixed(2)

    return (
    <div className='d-flex row justify-content-center'>
        <div className="card text-center text-dark bg-white mt-3" style={{"width": "18rem"}}>
            <div className="card-header">Results</div>
            <div className="card-body">
                <h5 className="card-text">Total Words : {words} </h5>
                <h5 className="card-text">Mistakes : {mistakes} </h5>
                <h5 className="card-text">WPM : {wpm} </h5>
                <h5 className="card-text">Accuracy : {accuracy}%</h5>
                <RestartButton />    
            </div>
        </div>
    </div>
  )
}
