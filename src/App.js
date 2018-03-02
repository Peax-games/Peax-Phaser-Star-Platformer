import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarPlatformer from './Game/Star-Platformer';

class App extends Component {
  render() {
    StarPlatformer();
    return (
      <div id="myCanvas">
        
      </div>
    );
  }
}

export default App;
