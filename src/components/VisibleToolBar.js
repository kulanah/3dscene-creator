import { createSphere } from '../action/actionCreators';
import { createCylinder } from '../action/actionCreators';
import { createBox } from '../action/actionCreators';
import { createCone } from '../action/actionCreators';

import { ToolBar } from './ToolBar';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  createSphere: id => dispatch(createSphere(id)),
  createBox: id => dispatch(createBox(id)),
  createCylinder: id => dispatch(createCylinder(id)),
  createCone: id => dispatch(createCone(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBar)