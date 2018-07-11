import React from 'react';
import './css/PropertiesBox.css';

class PropertiesBox extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div id='propertiesBoxDiv'>
        <p>Height: 53</p>
        <p>Width: 53</p>


      </div>
    )
  }
}

export { PropertiesBox };