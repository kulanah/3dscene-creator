import React from 'react';
import './css/PropertiesBox.css';
import './3DSceneCreator.css';

import store from '../store';
import VisibleBoxProperties from './VisibleBoxProperties';
import VisibleCylinderProperties from './VisibleCylinderProperties';
import VisibleSphereProperties from './VisibleSphereProperties';


class PropertiesBox extends React.Component{
  constructor(){
    super();
    this.state = ({
    });

    this.selectItem = this.selectItem.bind(this);
    this.displayItem = this.displayItem.bind(this);
  }


  displayItem(item){
    switch (item.type){
      case 'sphere':
        return <VisibleSphereProperties id={item.id} />;
        
      case 'cylinder':
        return <VisibleCylinderProperties id={item.id} />;

      case 'box': 
        return <VisibleBoxProperties id={item.id} />;
        
      default:
        return (<p>{this.props.selectedItem}</p>);
    }
  }

  checkIfAnySelected(){
    let state = store.getState();
    let selectedNum = state.applicationState.selectedItem;
    let selected;

    if (selectedNum > -1){
      selected = state.itemList[selectedNum];
    } else {
      selected = null;
    }

    return selected;
  }


  selectItem(){
    let selected = this.checkIfAnySelected();

    if (!selected){
      return (<h5>Currently no selected object</h5>);
    } else {
      return this.displayItem(selected);
    }
  }


  render(){
    return (
      <div className='window' id='propertiesBoxDiv'>
        <div className='windowHeader'>
          Properties
        </div>
        {this.selectItem()}
      </div>
    );
  }
}


export { PropertiesBox };