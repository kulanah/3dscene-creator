import React from 'react';

class Item extends React.Component{
  constructor(item){
    super();

    this.clickListItem = this.clickListItem.bind(this);
  }

  clickListItem(){
    this.props.listItem(this.props.data.id);
  }

  render(){
    let data = this.props.data;
    console.log(data);
    return (
      <li onClick={this.clickListItem}>{data.id + 1} : {data.type}</li>
    )
  }
} 

export { Item };