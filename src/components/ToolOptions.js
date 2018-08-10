import React from 'react';

import './css/ToolOptions.css';

class ToolOptions extends React.Component{
  constructor(){
    super();

    this.toolArray = ['No tool currently selected'];
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