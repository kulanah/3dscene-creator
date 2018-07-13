import React from 'react';

class ConeProperties extends React.Component{
  constructor(item){
    super();

    this.updateHeight = this.updateHeight.bind(this);
    this.updateRadius = this.updateRadius.bind(this);
    this.updateRadialSegments = this.updateRadialSegments.bind(this);

  }

  updateHeight(event){
    let newVal = event.target.value;
    let updateItem = {
      property: 'height',
      newVal: Number(newVal),
      id: this.props.item.id,
    }
    this.props.updateShapeProperties(updateItem);
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

  updateRadialSegments(event){
    let newVal = event.target.value;
    let updateItem = {
      property: 'radialSegments',
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
          <span className='propertiesTitle'>Cone</span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Height:</span>
          <span><input className='propertiesNumInput' onChange={this.updateHeight}type='number' value={item.height} /></span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Radius:</span>
          <span><input className='propertiesNumInput' onChange={this.updateRadius}type='number' value={item.radius} /></span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Radial Segments:</span>
          <span><input className='propertiesNumInput' onChange={this.updateRadialSegments}type='number' value={item.radialSegments} /></span>
        </div>
      </div>
    )
  }
}

export { ConeProperties }