import React from 'react';

import { Canvas } from './Canvas';
import VisibleToolBox from './VisibleToolBox';
import VisibleItemList from './VisibleItemList';
import VisibleToolOptions from './VisibleToolOptions';
import VisiblePropertiesBox from './VisiblePropertiesBox';

import './css/ThreeDScene.css';

class ThreeDScene extends React.Component{
  constructor(props){
    super(props);

    this.canvasRef = React.createRef();
  }

  render(){
    return(
      <div id='reactDiv'>
        <Canvas ref={this.canvasRef} items={this.props.items}/>
        <VisibleToolBox />
        <VisibleItemList />
        <VisiblePropertiesBox />
        <VisibleToolOptions />
      </div>
    );
  }
}

export { ThreeDScene };