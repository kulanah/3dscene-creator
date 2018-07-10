import React from 'react';
import './css/ItemList.css';

class ItemList extends React.Component{
  constructor(){
    super();
    this.state = ({
      items: [],
    });

    this.displayItems = this.displayItems.bind(this);
  }

  displayItems(){
    if (this.state.items.length === 0){
      return(
        <p>There are currently no items in the scene</p>
      );
    } else {
      return (
        /*map of items in list */
        <p>this is where the lsit goes</p>
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