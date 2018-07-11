import React from 'react';
import './css/ToolBar.css';

import { createSphere } from '../action/actionCreators';

class ToolBar extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div id='toolBarDiv'>
        <div className='shapeDiv'>Cube</div>
        <div onClick={this.props.createSphere} className='shapeDiv'>Sphere</div>
        <div className='shapeDiv'>Cylinder</div>
        <div className='shapeDiv'>Pyramid</div>
      </div>
    )
  }
}

export { ToolBar };