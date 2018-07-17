import React from 'react';

class SphereProperties extends React.Component{
  constructor(){
    super();

    this.updateRadius = this.updateRadius.bind(this);
  }

  updateRadius(event){
    let newVal = event.target.value;
    let updateItem = {
      property: 'radius',
      newVal: Number(newVal),
      id: this.props.item.id,
    }
    this.props.updateShapeProperties(updateItem);
  }

  render(){
    let item = this.props.item;
    return(
      <div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Sphere</span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Radius:</span>
          <span><input className='propertiesNumInput' onChange={this.updateRadius}type='number' value={item.radius} /></span>
        </div>
      </div>
    )
  }
}

export { SphereProperties }