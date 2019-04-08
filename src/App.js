import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className='header'>
            <nav className='nav-bar'>
              <span className='logo'>Start Bootstrap</span>
              <div className='nav-link-container'>
                <span>Services</span>
                <span>Portfolio</span>
                <span>About</span>
                <span>Team</span>
                <span>Contact</span>
              </div>
              <button className='ham-menu'>MENU |||</button>
            </nav>
            <div className='header-contents'>
              <h3 className='subtitle'>Welcome To Our Studio!</h3>
              <h1 className='title'>It's Nice to Meet You</h1>
              <button className='button'>Tell Me More</button>
            </div>
          </div>
        </div>

      

      </div>
    );
  }
}

export default App;
