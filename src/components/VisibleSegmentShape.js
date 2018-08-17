import { SegmentShape } from './SegmentShape';

import { connect } from 'react-redux';

const mapStateToProps = function(state){
  return {
    selectedObj: state.itemList[state.applicationState.selectedItem],
    applicationState: state.applicationState,
  };
};

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(SegmentShape);