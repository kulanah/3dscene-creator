import { SegmentShape } from './SegmentShape';

import { connect } from 'react-redux';

const mapStateToProps = function(state){
  return {
    selectedObj: state.itemList[state.applicationState.selectedItem]
  };
};

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(SegmentShape);