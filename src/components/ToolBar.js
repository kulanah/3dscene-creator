import React from 'react';
import './css/ToolBar.css';

class ToolBar extends React.Component{
  render(){
    return (
      <div className='window' id='toolBarDiv'>
        <div className='windowHeader'>Toolbox</div>
        <div onClick={this.props.createBox} className='shapeDiv'>Box</div>
        <div onClick={this.props.createSphere} className='shapeDiv'>Sphere</div>
        <div onClick={this.props.createCylinder} className='shapeDiv'>Cylinder</div>
      </div>
    );
  }
}

export { ToolBar };