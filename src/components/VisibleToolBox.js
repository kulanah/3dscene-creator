import { selectTool } from 'action/actionCreators';

import { ToolBox } from './ToolBox';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  selectTool: (toolId) => dispatch(selectTool(toolId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBox);