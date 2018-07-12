import React from 'react';

class Item extends React.Component{
  constructor(item){
    super();

    this.clickListItem = this.clickListItem.bind(this);
  }

  clickListItem(){
    this.props.listItem(this.props.data.id);
  }

  displayType(name){
    let upper = name.charAt(0).toUpperCase() + name.substr(1);
    return  upper 
  }

  render(){
    let data = this.props.data;
    return (
      <li className='sceneItems' onClick={this.clickListItem}>{data.id + 1} : {this.displayType(data.type)}</li>
    )
  }
} 

export { Item };