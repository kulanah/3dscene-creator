import React from 'react';
import './css/ToolBar.css';

import shapes from 'img/shapes.png';
import segments from 'img/segments.png';

class ToolBar extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className='window' id='toolBarDiv'>
        <div className='windowHeader'>Toolbox</div>
        <div id='toolsDiv'>
          <div onClick={() => this.props.selectTool(1)} className='toolDiv'>
            <img className='toolIcon' src={shapes} alt=''/>
            Create Shape
          </div>
          <div onClick={() => this.props.selectTool(2)} className='toolDiv'>
            <img className='toolIcon' src={segments} alt=''/>
            Segment Shape
          </div>
        </div>
      </div>
    );
  }
}

export { ToolBar };