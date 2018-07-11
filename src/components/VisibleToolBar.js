import { createSphere } from '../action/actionCreators';

import { ToolBar } from './ToolBar';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  createSphere: id => dispatch(createSphere(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBar)