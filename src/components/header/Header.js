import React, { Fragment } from 'react'
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className='header'>
        <div className='headerLogo'>
          Xpensr
          <i className="fi fi-rs-credit-card"></i>
        </div>
        <div className="headerBtn">
          <a href="https://github.com/mozammilkarim" target="_blank" rel='noopener noreferrer' >


            <i className="devicon-github-original colored"></i>

            Star
          </a>
        </div>
      </div>
    </div>

  )
}

export default Header