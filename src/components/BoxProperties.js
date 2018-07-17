import React from 'react';

class BoxProperties extends React.Component{
  constructor(){
    super();

    this.updateHeight = this.updateHeight.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.updateDepth = this.updateDepth.bind(this);
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

  updateWidth(event){
    let newVal = event.target.value;
    let updateItem = {
      property: 'width',
      newVal: Number(newVal),
      id: this.props.item.id,
    }
    this.props.updateShapeProperties(updateItem);
  }

  updateDepth(event){
    let newVal = event.target.value;
    let updateItem = {
      property: 'depth',
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
          <span className='propertiesTitle'>Box</span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Depth:</span>
          <span><input className='propertiesNumInput' onChange={this.updateDepth}type='number' value={item.depth} /></span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Width:</span>
          <span><input className='propertiesNumInput' onChange={this.updateWidth}type='number' value={item.width} /></span>
        </div>
        <div className='propertiesRow'>
          <span className='propertiesTitle'>Height:</span>
          <span><input className='propertiesNumInput' onChange={this.updateHeight}type='number' value={item.height} /></span>
        </div>
      </div>
    )
  }
}

export { BoxProperties }