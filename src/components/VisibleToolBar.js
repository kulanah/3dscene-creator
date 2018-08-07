import { createSphere } from '../action/actionCreators';
import { createCylinder } from '../action/actionCreators';
import { createBox } from '../action/actionCreators';

import { ToolBar } from './ToolBar';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  createSphere: () => dispatch(createSphere()),
  createBox: () => dispatch(createBox()),
  createCylinder: () => dispatch(createCylinder()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBar);