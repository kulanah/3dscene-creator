import React from 'react';
import './css/ItemList.css';
import './3DSceneCreator.css';
import { Item } from './Item';

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
            <Item key={item.id} selectItem={this.props.selectItem} deleteItem={this.props.deleteItem} data={item} />
          )}
        </ul>
      );
    }
  }

  render(){
    return (
      <div className='window' id='itemListDiv'>
        <div className='windowHeader'>Item List</div>
        <div id='itemListContent'>
          {this.displayItems()}

        </div>
      </div>
    );
  }
}

export { ItemList };