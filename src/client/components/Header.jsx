import React from 'react'
import blueLogo from '../assets/blueLogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <img src={blueLogo} />
        <nav>
        <Link to="/home">Home</Link>
        <Link to="/teams">Teams</Link> 
        <Link to="/newTeam">Make a team</Link>
        </nav>
    </header>
  )
}

export default Header
