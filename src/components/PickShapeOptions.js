import React from 'react';
import { CreateBoxOptions } from './CreateBoxOptions';

class PickShapeOptions extends React.Component{

  render(){
    switch (this.props.shape){
      case 'box':
        return <CreateBoxOptions/>

      case 'sphere':
        return <p>ISSA SPHERE</p>;

      case 'cylinder':
        return <p>ISSA cylinder</p>;

      default: 
        return  '';
    }
  }
}

export { PickShapeOptions };