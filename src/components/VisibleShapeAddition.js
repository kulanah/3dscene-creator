import { selectTool } from 'action/actionCreators';
import { combineShapes } from 'action/actionCreators';

import { ShapeAddition } from './ShapeAddition';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  selectTool: (toolId) => dispatch(selectTool(toolId)),
  combineShapes: (shape1, shape2) => dispatch(combineShapes(shape1, shape2)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShapeAddition);
