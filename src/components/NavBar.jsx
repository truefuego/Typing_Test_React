import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-dark bg-gradient">
        <div className="container-fluid">
            <Link className="navbar-brand text-white" to="#">
                <img src={logo} alt="" width="40" height="40" className="d-inline-block align-text-center" />
                Typing Test
            </Link>
        </div>
    </nav>
  )
}
