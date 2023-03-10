import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';

class App extends Component {
  state = {
    isAboutMe: true
  };

  switchAboutMe = () => {
    //update state
    this.setState({
      isAboutMe: !this.state.isAboutMe
    });
  };

  render() {
    return (
      <div className="App container">
        <Navbar click={this.switchAboutMe}
        />
        <div id="body">
          {this.state.isAboutMe ?
            <div>
              <h1>Hi, I'm Eric; Full Stack Developer</h1>
              <h1>located in the Seattle, WA area</h1>
            </div>
            :
            <div>
              <div>
                <img src="./profile-pic.jpg" alt="profile pic" className="profile-image"></img>
              </div>
              <div>
                <p className="bio">After some time in the medical and donation industries, I decided to take on a
                    new challenge. Coding is something that has always been an interest for me so web development
                    was a logical next step.</p>

                <p className="bio">I recently completed a year long bootcamp that is a collaboration between Amazon
                    Technical Academy (ATA) and Kenzie Academy (part of Southern NH Univ). This focused on Java and
                    Amazon Web Services (AWS). During that time, I was hired by Kenzie to be a Java coach for that
                    same program. Also, in 2019 I completed the University of MN Coding Bootcamp where learned HTML,
                    Javascript, CSS, React.js, MongoDB, MySQL, and many other programming languages and applications.</p>

                <p className="bio">I am friendly, open, intelligent and I love a good challenge. I’m excited about
                    the prospect of going into a job where I can build web applications that fill a need. I want to
                    continue to learn and grow my coding skills to the point where I can teach and mentor other new
                    full stack developers through their own learning and growth.</p>
              </div>
            </div>
          }
        </div>
          <div>
            <Project />
          </div>
      </div>
    );
  }
}

export default App;
