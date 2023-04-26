import React from 'react'
import Letter from './Letter'

export default function Word(props) {
    const letters = Array.from(props.word);
  return (
    <div className='d-flex px-1'>{
        letters.map((letter) => (
            <Letter letter={letter}/>
        ))}
    </div>
  )
}
