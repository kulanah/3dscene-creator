import React from 'react';
import { SegmentBox } from './SegmentBox';

class SegmentShape extends React.Component{
  selectShape(){
    if (this.props.selectedObj){
      switch(this.props.selectedObj.type){
        case("box"):
          return <SegmentBox shape={this.props.selectedObj} applicationState={this.props.applicationState}/>;

        default:
          return <p>Segmentation for the shape selected not currently implemented.</p>;

      }
    }
    return <p>No object currently selected</p>;
  }

  render(){
    return(
      <div>
        {this.selectShape()}
      </div>
    );
  }
}


/*
  user workflow 
  1 user selects tool from toolbox
  2 options box populates with options about currently seleected object
    NOTE: if at any point after this the user selcts a different item it will repopulate with that items data
    NOTE: the box has 3 options: x, y, and z segmentation counts.  When the user increases or decreases one of them 
          it will chnage the selected highlight segmentations
  3 


*/


export { SegmentShape };