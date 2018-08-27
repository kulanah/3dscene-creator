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
        console.log(htmlForm[i].value);
        console.log(htmlForm[i].name);
        data.push({[htmlForm[i].name]: htmlForm[i].value});
      }
    }
    console.log(data);
    return data;
  }

  submitAddition(event){
    event.preventDefault();
    this.serializeForm(event.target);
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