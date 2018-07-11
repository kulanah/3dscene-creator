import React from 'react';

import { Scene } from './Scene';
import VisibleToolBar from './VisibleToolBar';
import VisibleItemList from './VisibleItemList';
// import { ItemList } from './ItemList';
import { PropertiesBox } from './PropertiesBox';
// import store from '../store';

class ThreeDScene extends React.Component{
  // constructor(){
  //   super();
  // }

  render(){
    console.log(this.props);
    return(
      <div>
        <Scene />
        <VisibleToolBar />
        <VisibleItemList />
        <PropertiesBox />
      </div>
    )
  }
}

export { ThreeDScene };