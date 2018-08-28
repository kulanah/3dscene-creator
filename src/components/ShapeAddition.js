import React from 'react';

class ShapeAddition extends React.Component{
  constructor(props){
    super(props);

    this.submitAddition = this.submitAddition.bind(this);

  }

  serializeForm(htmlForm){
    let data = [];

    for (let i = 0; i < htmlForm.length; ++i){
      if (htmlForm[i].type === 'number'){
        data.push(Number(htmlForm[i].value));
      }
    }
    return data;
  }

  submitAddition(event){
    event.preventDefault();
    let data = this.serializeForm(event.target);
    // this.props.combineShapes(data[0] - 1, data[1] - 1);
    // console.log(event.target);
  }
  shapeAddition(){
    return(
      <div>
        <form onSubmit={this.submitAddition} action=''>
          <p>Select the two shapes to add together:</p>
          <label htmlFor='additionOne'>First shape:</label>
          <input type='number' name='additionOne' id=''/>
          <label htmlFor='additionTwo'>Second shape:</label>
          <input type='number' name='additionTwo' id=''/>
          <input type='submit' />
        </form>
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