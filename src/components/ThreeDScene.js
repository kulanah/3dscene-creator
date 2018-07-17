import React from 'react';

import { Canvas } from './Canvas';
import VisibleToolBar from './VisibleToolBar';
import VisibleItemList from './VisibleItemList';
import { PropertiesBox } from './PropertiesBox';

import './css/ThreeDScene.css';

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
      <div id='reactDiv'>
        <Canvas items={this.props.items}/>
        <VisibleToolBar />
        <VisibleItemList selectItem={this.selectItem} />
        <PropertiesBox selectedItem={this.state.selectedItem} />
      </div>
    )
  }
}

export { ThreeDScene };