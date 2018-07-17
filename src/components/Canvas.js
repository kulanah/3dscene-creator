import React from 'react';
import { ThreeEntryPoint } from '../threeHelpers/ThreeEntryPoint';

import './css/Canvas.css';

class Canvas extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){
    this.threePoint = new ThreeEntryPoint(this.threeRootElement);
    this.threePoint.init();
  }


  createBox(){
    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    // var cube = new THREE.Mesh( geometry, material );
    // this.scene.add( cube );
  }

  render(){
    return(
      <div id='canvasDiv' ref={element => this.threeRootElement = element} />
    )

  }
}

export { Canvas }