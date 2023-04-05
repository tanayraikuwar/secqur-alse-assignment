import React from 'react'
import "../assets/CSS/Header.css"
import companyLogo from "../assets/images/companyLogo.png"

const Header = ({ maleCount, femaleCount }) => {
  return (
    <nav className='navbar'>

      <div className="logo">
        <img src={companyLogo} alt="logo" />
      </div>

      <div className="display-count">
        <div className="male-count">{maleCount}</div>
        <div className="female-count">{femaleCount}</div>
      </div>
      
    </nav>
  )
}

export default Header