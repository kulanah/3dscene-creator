import React from 'react';

import store from 'store';
import { createBox } from '../action/actionCreators';

import 'components/css/ShapeOptions.css';

class CreateBoxOptions extends React.Component{
  constructor(){
    super();

    this.state = {
      height: 10,
      width: 10,
      depth: 10, 
      x: 5,
      y: 5,
      z: 5,
    };

    this.updateHeight = this.updateHeight.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.updateDepth = this.updateDepth.bind(this);
    this.updateX = this.updateX.bind(this);
    this.updateY = this.updateY.bind(this);
    this.updateZ = this.updateZ.bind(this);
    this.addItem = this.addItem.bind(this);
    this.resetValues = this.resetValues.bind(this);
  }

  addItem(event){
    event.preventDefault();
    let item = {
      height: this.state.height,
      width: this.state.width,
      depth: this.state.depth,
      x: this.state.x,
      y: this.state.y,
      z: this.state.z,
    };
    store.dispatch(createBox(item));
    this.resetValues();
  }

  resetValues(){
    this.setState({
      height: 10,
      width: 10,
      depth: 10, 
      x: 5,
      y: 5,
      z: 5,
    });
  }

  updateHeight(event){
    this.setState({height: Number(event.target.value)});
  }

  updateDepth(event){
    this.setState({depth: Number(event.target.value)});
  }

  updateWidth(event){
    this.setState({width: Number(event.target.value)});
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
            <label htmlFor='height'>Height: </label>
            <input className='shapeOptionInput' onChange={this.updateHeight} value={this.state.height} name='height' type='number'/>
          </span>

          <span className='shapeOptionRow'>          
            <label htmlFor='depth'>Depth: </label>
            <input className='shapeOptionInput' onChange={this.updateDepth} value={this.state.depth} name='depth' type='number'/>
          </span>

          <span className='shapeOptionRow'>          
            <label htmlFor='width'>Width: </label>
            <input className='shapeOptionInput' onChange={this.updateWidth} value={this.state.width} name='width' type='number'/>
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

export { CreateBoxOptions };