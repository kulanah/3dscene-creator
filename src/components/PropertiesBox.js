import React from 'react';
import './css/PropertiesBox.css';

import store from '../store';
import VisibleBoxProperties from './VisibleBoxProperties';
import VisibleConeProperties from './VisibleConeProperties';

class PropertiesBox extends React.Component{
  constructor(){
    super();
    this.state = ({
      selectedObject: -1,
    });

    this.selectItem = this.selectItem.bind(this);
    this.displaySphere = this.displaySphere.bind(this)
    this.displayCylinder = this.displayCylinder.bind(this)
  }

  displaySphere(id){
    return (<VisibleBoxProperties id={id}/>)
  }

  displayCone(item){
    return (
      <div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Cylinder</span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Radius:</span>
          <span>{item.radius}</span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Height:</span>
          <span>{item.height}</span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Radial Segments:</span>
          <span>{item.radialSegments}</span>
        </div>
      </div>
    )
  }

  displayCylinder(item){
    return (
      <div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Cylinder</span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Radius:</span>
          <span>{item.radius}</span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Height:</span>
          <span>{item.height}</span>
        </div>
      </div>
    )
  }

  displayItem(item){
    switch (item.type){
      case 'sphere':
        return this.displaySphere(item);
      case 'cylinder':
        return this.displayCylinder(item);
      case 'box': 
        return <VisibleBoxProperties id={item.id} />
      case 'cone':
        return <VisibleConeProperties id={item.id} />
      default:
        return (<p>{this.props.selectedItem}</p>)
    }
  }

  selectItem(){
    if (this.props.selectedItem < 0){
      return (<h5>Currently no selected object</h5>)
    } else {
      let item = store.getState().createItems[this.props.selectedItem];
      return this.displayItem(item);
    }
  }

  render(){
    return (
      <div id='propertiesBoxDiv'>
        {this.selectItem()}
      </div>
    )
  }
}

export { PropertiesBox };