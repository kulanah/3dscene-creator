import React from 'react';
import { CreateBoxOptions } from './CreateBoxOptions';
import { CreateSphereOptions } from './CreateSphereOptions';
import { CreateCylinderOptions } from './CreateCylinderOptions';

class PickShapeOptions extends React.Component{

  render(){
    switch (this.props.shape){
      case 'box':
        return <CreateBoxOptions/>;

      case 'sphere':
        return <CreateSphereOptions />;

      case 'cylinder':
        return <CreateCylinderOptions />;
      default: 
        return  '';
    }
  }
}

export { PickShapeOptions };