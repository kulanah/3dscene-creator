import React from 'react';
import store from 'store';

import { updateSegmentX } from 'action/actionCreators';
import { updateSegmentY } from 'action/actionCreators';
import { updateSegmentZ } from 'action/actionCreators';

import { updateSelectedSegmentX } from 'action/actionCreators';
import { updateSelectedSegmentY } from 'action/actionCreators';
import { updateSelectedSegmentZ } from 'action/actionCreators';


class SegmentBox extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      segmentX: 0,
      segmentY: 0,
      segmentZ: 0,
    };

    this.changeSegmentX = this.changeSegmentX.bind(this);
    this.changeSegmentY = this.changeSegmentY.bind(this);
    this.changeSegmentZ = this.changeSegmentZ.bind(this);
    this.changeSelectedSegmentX = this.changeSelectedSegmentX.bind(this);
    this.changeSelectedSegmentY = this.changeSelectedSegmentY.bind(this);
    this.changeSelectedSegmentZ = this.changeSelectedSegmentZ.bind(this);
  }

  changeSelectedSegmentX(event){
    store.dispatch(updateSelectedSegmentX(this.props.shape.id, event.target.value));
  }

  changeSelectedSegmentY(event){
    store.dispatch(updateSelectedSegmentY(this.props.shape.id, event.target.value));
  }

  changeSelectedSegmentZ(event){
    store.dispatch(updateSelectedSegmentZ(this.props.shape.id, event.target.value));
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
          <label htmlFor=''>X Segment Count</label>
          <input type='number' onChange={this.changeSegmentX} value={this.props.shape.segmentX}/>
        </div>
        <div>
          <label htmlFor=''>Y Segment Count</label>
          <input type='number' onChange={this.changeSegmentY} value={this.props.shape.segmentY}/>
        </div>
        <div>
          <label htmlFor=''>Z Segment Count</label>
          <input type='number' onChange={this.changeSegmentZ} value={this.props.shape.segmentZ}/>
        </div>
        <hr />

        <div>
          <label htmlFor=''>X Segment</label>
          <input type='number' onChange={this.changeSelectedSegmentX} value={this.props.applicationState.selectedX} />
        </div>
        <div>
          <label htmlFor=''>Y Segment</label>
          <input type='number' onChange={this.changeSelectedSegmentY} value={this.props.applicationState.selectedY} />
        </div>
        <div>
          <label htmlFor=''>Z Segment</label>
          <input type='number' onChange={this.changeSelectedSegmentZ} value={this.props.applicationState.selectedZ} />
        </div>
        <hr />


      </div>
    );
  }
}

export { SegmentBox };