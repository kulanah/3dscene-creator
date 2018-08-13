import React from 'react';

import { PickShapeOptions } from './PickShapeOptions';


class CreateShape extends React.Component{
  constructor(){
    super();

    this.state = {'value':'default'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({'value': event.target.value});
  }

  render(){
    return(
      <div>
        <label htmlFor='shapeSelection'>Shape: </label>
        <select onChange={this.handleChange} value={this.state.value} name='shapeSelecion' id=''>
          <option style={{'display': 'none'}} disabled value='default'>Select A Shape</option>
          <option value='box'>Box</option>
          <option value='sphere'>Sphere</option>
          <option value='cylinder'>Cylinder</option>
        </select>
        <PickShapeOptions shape={this.state.value} />
      </div>
    );
  }
};

export { CreateShape };