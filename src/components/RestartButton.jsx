import React from 'react'

export default function RestartButton() {
    const clickHandler = () => {
        window.location.reload()
    }
  return (
    <div>
        <button className="btn btn-primary" onClick={clickHandler}>Restart</button>
    </div>
  )
}
