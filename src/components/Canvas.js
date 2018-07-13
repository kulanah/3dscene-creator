import React from 'react';
import * as THREE from 'three';
import threeEntryPoint from '../threeHelpers/threeEntryPoint';

import './css/Canvas.css';

class Canvas extends React.Component{
  constructor(){
    super();

    this.init = this.init.bind(this);

    // this.init();
  }

  componentDidMount(){
    threeEntryPoint(this.threeRootElement);
  }

  init(){
  }

  render(){
    return(
      <div id='canvasDiv' ref={element => this.threeRootElement = element} />
    )

  }
}

export { Canvas }