import React from 'react';

import { Scene } from './Scene';
import VisibleToolBar from './VisibleToolBar';
import { ItemList } from './ItemList';
import { PropertiesBox } from './PropertiesBox';

class ThreeDScene extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Scene />
        <VisibleToolBar />
        <ItemList />
        <PropertiesBox />
      </div>
    )
  }
}

export { ThreeDScene };