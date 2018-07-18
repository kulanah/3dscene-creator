import React from 'react';
import './css/PropertiesBox.css';

import store from '../store';
import VisibleBoxProperties from './VisibleBoxProperties';
import VisibleCylinderProperties from './VisibleCylinderProperties';
import VisibleSphereProperties from './VisibleSphereProperties';

class PropertiesBox extends React.Component{
  constructor(){
    super();
    this.state = ({
      selectedObject: -1,
    });

    this.selectItem = this.selectItem.bind(this);
    this.displayItem = this.displayItem.bind(this);
  }

  displayItem(item){
    switch (item.type){
      case 'sphere':
        return <VisibleSphereProperties id={item.id} />
      case 'cylinder':
        return <VisibleCylinderProperties id={item.id} />
      case 'box': 
        return <VisibleBoxProperties id={item.id} />
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
        <div className='propertiesBoxHeader'>
          Properties
        </div>
        {this.selectItem()}
      </div>
    )
  }
}

export { PropertiesBox };