import React from 'react';
import './css/PropertiesBox.css';

class PropertiesBox extends React.Component{
  constructor(){
    super();
    this.state = ({
      selectedObject: -1,
    });

    this.displayItem = this.displayItem.bind(this);
  }

  displayItem(){
    if (this.state.selectedObject < 0){
      return (<h5>Currently no selected object</h5>)
    } else {
      return (<p>test</p>)
    }
  }

  render(){
    return (
      <div id='propertiesBoxDiv'>
        {this.displayItem()}

      </div>
    )
  }
}

export { PropertiesBox };