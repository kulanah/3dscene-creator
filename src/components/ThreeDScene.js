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
    console.log('AHA the answer is ' + foo);
    this.setState({selectedItem: foo})
  }



  render(){
    return(
      <div>
        <Scene />
        <VisibleToolBar selectedItem={this.state.selectedItem} />
        <VisibleItemList selectItem={this.selectItem} />
        <PropertiesBox />
      </div>
    )
  }
}

export { ThreeDScene };