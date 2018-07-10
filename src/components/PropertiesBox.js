import React from 'react';
import './css/PropertiesBox.css';

class PropertiesBox extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div id='propertiesBoxDiv'>
        <div className='shapeDiv'>Cube</div>
        <div className='shapeDiv'>Sphere</div>
        <div className='shapeDiv'>Cyllinder</div>
        <div className='shapeDiv'>Pyramid</div>
      </div>
    )
  }
}

export { PropertiesBox };