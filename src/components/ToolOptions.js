import React from 'react';

import './css/ToolOptions.css';
import { CreateShape } from './CreateShape';

class ToolOptions extends React.Component{
  constructor(){
    super();

    this.toolArray = ['No tool currently selected', <CreateShape/>];
  }

  render(){
    return(
      <div className='window' id='toolOptionsDiv'>
        <div className='windowHeader'>
          Tool Options
        </div>
        <div id='toolOptionsContent'>
          {this.toolArray[this.props.selectedTool]}
        </div>
      </div>
    );
  }
}

export { ToolOptions };