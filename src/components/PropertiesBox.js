import React from 'react';
import './css/PropertiesBox.css';

import store from '../store';

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

  displaySphere(item){
    return (
      <div>
        <p>Sphere</p>
        <p>Radius: {item.radius}</p>
      </div>
    )
  }

  displayCylinder(item){
    return (
      <div>
        <p>Cylinder</p> 
        <p>Radius: {item.radius}</p>
        <p>Height: {item.height}</p>
      </div>
    )
  }

  displayBox(item){
    return (
      <div>
        <p>Box:</p> 
        <p>Length: {item.radius}</p>
        <p>Width: {item.width}</p>
        <p>Height: {item.height}</p>
      </div>
    )
  }

  displayItem(item){
    switch (item.type){
      case 'sphere':
        return this.displaySphere(item);
      case 'cylinder':
        return this.displayCylinder(item);
      default:
        return (<p>{this.props.selectedItem}</p>)
    }
  }

  selectItem(){
    if (this.props.selectedItem < 0){
      return (<h5>Currently no selected object</h5>)
    } else {
      let item = store.getState().createItems[this.props.selectedItem];
      console.log(item);
      this.displayItem(item);
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