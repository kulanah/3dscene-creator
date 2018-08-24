import React from 'react';

class ShapeAddition extends React.Component{
  shapeAddition(){
    return(
      <div>
        <p>Select the two shapes to add together:</p>
        <input type='number' name='' id=''/>
        <input type='number' name='' id=''/>
      </div>
    );
  }

  render(){
    return(
      <div>
        {this.shapeAddition()}
      </div>
    );
  }
}

export { ShapeAddition };