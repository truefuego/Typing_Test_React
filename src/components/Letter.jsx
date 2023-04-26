import React, { useState } from 'react'

export default function Letter(props) {
  const letter = props.letter;
  let spacing = "";
  if(letter === ' ') {
    spacing = " p-1";
  }
  return (
    <span className={"bg-" + props.color + spacing}>{letter}</span>
  )
}
