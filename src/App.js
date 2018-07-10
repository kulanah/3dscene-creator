import React, { Component } from 'react';
import './App.css';

import { ThreeDScene } from './components/ThreeDScene';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='sceneDiv'>
          <ThreeDScene />
        </div>
      </div>
    );
  }
}

export default App;
