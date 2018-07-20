import React from 'react';

import './css/Item.css';
import trashIcon from '../img/trash.svg';

class Item extends React.Component{
  constructor(){
    super();

    this.clickListItem = this.clickListItem.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
  }

  clickListItem(){
    this.props.selectItem(this.props.data.id);
  }

  clickDelete(){
    this.props.deleteItem(this.props.data.id);

  }

  displayType(name){
    let upper = name.charAt(0).toUpperCase() + name.substr(1);
    return upper;
  }

  render(){
    let data = this.props.data;
    return (
      <li className='sceneItems'>
        <span onClick={this.clickListItem}>
          {data.id + 1} : {this.displayType(data.type)}
        </span>
        <span>
          <img className='trashIcon' onClick={this.clickDelete} src={trashIcon} alt=''/>
        </span>
      </li>
    );
  }
} 

export { Item };