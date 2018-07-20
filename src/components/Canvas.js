import React from 'react';
import { ThreeEntryPoint } from '../threeHelpers/ThreeEntryPoint';

import './css/Canvas.css';

class Canvas extends React.Component{
  componentDidMount(){
    this.threePoint = new ThreeEntryPoint(this.threeRootElement);
    this.threePoint.init();
  }

  componentDidUpdate(){
    this.threePoint.updateState(this.props.items);
  }

  render(){
    return(
      <div id='canvasDiv' ref={element => this.threeRootElement = element} />
    );

  }
}

export { Canvas };