import React, { useState , useEffect , useRef } from 'react'
import para from '../assets/ParaGraph';
import Letter from './Letter';
import RestartButton from './RestartButton';
import EndCard from './EndCard';

export default function ParaGraphCard() {
    let index = 0

    const [openInput,setClose] = useState(true);
    const [totalTime,setTotalTime] = useState(0)
    const [finalPara,setFinalPara] = useState("");
    const [len,setLen] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [userInput,setUserInput] = useState("");
    const [isActive,setIsActive] = useState(false);
    const [isCompleted,setIsCompleted] = useState(false);

    const [paraGraph,setParaGraph] = useState(para.split('').map((char) => {
        return ({
            key: index++,
            val: char,
            color: "dark"
        })
    }))
    
    const userInputHandler = (e) => {
        const newParaGraph = paraGraph
        const inputUser = e.target.value
        const idx = inputUser.length-1
        setLen(inputUser.length)
        setUserInput(e.target.value)
        if(idx > para.length - 1) {
            return;
        }
        if(idx < para.length - 1) {
            newParaGraph[idx+1].color= "info"
        }
        if(len > inputUser.length) {
            if(len < para.length) {
                newParaGraph[len].color= "dark"
            }
        }
        if(inputUser.length === 0) {
            return
        }
        if(newParaGraph[idx].val === inputUser[idx]) {
            newParaGraph[idx].color= "success"
        }
        else {
            newParaGraph[idx].color= "danger"
        }
        if(len === 0) {
            setIsActive(true)
        }
        if(inputUser.length === para.length) {
            setClose(false)
            setTotalTime(seconds)
            setFinalPara(e.target.value)
            setIsCompleted(true)
            setIsActive(false)
        }
        setParaGraph(newParaGraph)
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } 
        else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);
    
    return (
        <div className='d-flex row justify-content-center'>
            <div className='m-5 fs-4 w-75'>
                <b-card className='text-center'>
                    <div className='d-flex flex-wrap bg-dark text-light'>
                        {
                            paraGraph.map((v) => (
                                <Letter key={v.key} letter={v.val} color={v.color}/>
                            ))
                        }
                    </div>
                </b-card>
            </div>
            {openInput && (
                <div className="container d-flex justify-content-center">
                    <div className="align-self-center">
                        <input className='w-100 fs-5' placeholder="start type from here" value={userInput} onChange={userInputHandler}/>
                    </div>
                </div>
            )}
            {isCompleted ? (
            <div className='m-5 fs-4 w-75'>
                <EndCard finalPara={finalPara} mainPara={para} time={totalTime} />
            </div>
            ) : (
            <div className='m-5 fs-4 w-75 text-center'>
                <div>
                    Time : {seconds}
                </div>
                <RestartButton />
            </div>)}
        </div>
    )
}
