import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Top Speed Appliance" className="logo" />
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
