import React from 'react';
import './css/ItemList.css';

import store from '../store';

class ItemList extends React.Component{
  constructor(){
    super();

    this.displayItems = this.displayItems.bind(this);
  }

  displayItems(){
    if (this.props.items.length === 0){
      return(
        <p>There are currently no items in the scene</p>
      );
    } else {
      return (
        <ul>
          {this.props.items.map(item => 
          <li>{item.id + 1} : {item.type}</li>
          )}
        </ul>
      )
    }
  }

  render(){
    return (
      <div id='itemListDiv'>{this.displayItems()}</div>
    )
  }
}

export { ItemList };