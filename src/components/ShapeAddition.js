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
    let item1 = this.compileState(this.props.items[data[0] - 1]);
    let item2 = this.compileState(this.props.items[data[1] - 1]);
    this.props.updateSelectedState(data[0] - 1, data[1] - 1);
    this.props.combineShapes(item1, item2);

    //compile state (take only the most recent update to each sbpa)
    //Retrieve two objects
  }

  compileState(item){
    if (item){
      let indexes = {};
      let data = {};

      data.id = item.id;

      for (let i = 0; i < Object.keys(item).length; i++){
        let property = Object.getOwnPropertyNames(item)[i];
        if (property !== 'history' && property !== 'selected'){
          data[property] = item[property];
        }
      }

      for (let i = 0; i < item.history.length; i++){
        let property = Object.getOwnPropertyNames(item.history[i])[0];
        indexes[property] = i;
      }

      for (let prop in indexes){
        data[prop] = item.history[indexes[prop]][prop];
      }

      return data;
    }

    else {
      console.error('No items added to addition function, please select two items to add together.');
    }
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