import React from 'react';

import { Scene } from './Scene';
import { ToolBar } from './ToolBar';
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
        <ToolBar />
        <ItemList />
        <PropertiesBox />
      </div>
    )
  }
}

export { ThreeDScene };