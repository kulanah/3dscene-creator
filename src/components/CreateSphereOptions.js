import React from 'react';

import store from 'store';
import { createSphere } from '../action/actionCreators';

import 'components/css/ShapeOptions.css';

class CreateSphereOptions extends React.Component{
  constructor(){
    super();

    this.state = {
      radius: 10,
      x: 5,
      y: 5,
      z: 5,
    };

    this.updateRadius = this.updateRadius.bind(this);
    this.updateX = this.updateX.bind(this);
    this.updateY = this.updateY.bind(this);
    this.updateZ = this.updateZ.bind(this);
    this.addItem = this.addItem.bind(this);
    this.resetValues = this.resetValues.bind(this);
  }

  addItem(event){
    event.preventDefault();
    let item = {
      radius: this.state.radius,
      x: this.state.x,
      y: this.state.y,
      z: this.state.z,
    };
    store.dispatch(createSphere(item));
    this.resetValues();
  }

  resetValues(){
    this.setState({
      radius: 10,
      x: 5,
      y: 5,
      z: 5,
    });
  }

  updateRadius(event){
    this.setState({radius: Number(event.target.value)});
  }

  updateX(event){
    this.setState({x: Number(event.target.value)});
  }

  updateY(event){
    this.setState({y: Number(event.target.value)});
  }

  updateZ(event){
    this.setState({z: Number(event.target.value)});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.addItem}>
          <span className='shapeOptionRow'>          
            <label htmlFor='radius'>Radius: </label>
            <input className='shapeOptionInput' onChange={this.updateRadius} value={this.state.radius} name='radius' type='number'/>
          </span>

          <span className='shapeOptionRow'>          
            <label htmlFor='x'>X: </label>
            <input className='shapeOptionInput' onChange={this.updateX} value={this.state.x} name='x' type='number'/>
          </span>
          
          <span className='shapeOptionRow'>          
            <label htmlFor='y'>Y: </label>
            <input className='shapeOptionInput' onChange={this.updateY} value={this.state.y} name='y' type='number'/>
          </span>

          <span className='shapeOptionRow'>          
            <label htmlFor='z'>Z: </label>
            <input className='shapeOptionInput' onChange={this.updateZ} value={this.state.z} name='z' type='number'/>
          </span>

          <input type='submit' value='Add'/>
        </form>
      </div>
    );
  }
}

export { CreateSphereOptions };