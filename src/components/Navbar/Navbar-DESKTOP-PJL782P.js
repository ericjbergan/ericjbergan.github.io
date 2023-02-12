import React from 'react';
import './Navbar.css';

const navbar = (props) => {

  return (
    <nav>
      <ul class="nav-container">
        <li>
          <img src={'./logo.jpg'} className="logo" alt="logo"></img>
        </li>
        <li>
          <img src={'./bootcamp-badge.png'} className="badge" alt="badge" />
        </li>
        <li>
          <h2 className="nav-name">Eric Bergan</h2>
          <h3 className="nav-title">Full Stack Developer</h3>
        </li>
        <li className="nav-item about">
          <p className="nav-link" onClick={props.click}>About Me</p>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/ericjbergan" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/eric-bergan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://drive.google.com/file/d/1M0arQXR9ouHr8fAeIFoCUsrKBQFOf7oS/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="mailto: ericjbergan@gmail.com">Contact</a>
        </li>

      </ul>
    </nav>
  )
}

export default navbar;