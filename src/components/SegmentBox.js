import React from 'react';
import store from 'store';

import { updateSegmentX } from 'action/actionCreators';
import { updateSegmentY } from 'action/actionCreators';
import { updateSegmentZ } from 'action/actionCreators';

class SegmentBox extends React.Component{
  constructor(props){
    super(props);

    this.changeSegmentX = this.changeSegmentX.bind(this);
    this.changeSegmentY = this.changeSegmentY.bind(this);
    this.changeSegmentZ = this.changeSegmentZ.bind(this);
  }
  changeSegmentX(event){
    store.dispatch(updateSegmentX(this.props.shape.id, event.target.value));
  }

  changeSegmentY(event){
    store.dispatch(updateSegmentY(this.props.shape.id, event.target.value));
  }

  changeSegmentZ(event){
    store.dispatch(updateSegmentZ(this.props.shape.id, event.target.value));
  }

  render(){
    return(
      <div>
        <div>
          <label htmlFor=''>X Segment</label>
          <input type='number' onChange={this.changeSegmentX} value={this.props.shape.segmentX}/>
        </div>
        <div>
          <label htmlFor=''>Y Segment</label>
          <input type='number' onChange={this.changeSegmentY} value={this.props.shape.segmentY}/>
        </div>
        <div>
          <label htmlFor=''>Z Segment</label>
          <input type='number' onChange={this.changeSegmentZ} value={this.props.shape.segmentZ}/>
        </div>
      </div>
    );
  }
}

export { SegmentBox };