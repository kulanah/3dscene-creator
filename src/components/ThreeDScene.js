import React from 'react';

import { Scene } from './Scene';
import VisibleToolBar from './VisibleToolBar';
import VisibleItemList from './VisibleItemList';
import { PropertiesBox } from './PropertiesBox';

class ThreeDScene extends React.Component{
  constructor(){
    super();

    this.state = {
      selectedItem: -1,
    }

    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(foo){
    this.setState({selectedItem: foo})
  }

  render(){
    return(
      <div>
        <Scene />
        <VisibleToolBar />
        <VisibleItemList selectItem={this.selectItem} />
        <PropertiesBox selectedItem={this.state.selectedItem} />
      </div>
    )
  }
}

export { ThreeDScene };