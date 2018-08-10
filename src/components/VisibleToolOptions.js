import { ToolOptions } from './ToolOptions';

// this is an exmaple of the action function needed 
import { updateShapeProperties } from '../action/actionCreators';

import { connect } from 'react-redux';

const mapStateToProps = function(items){
  console.log(items.applicationState);
  return {
    selectedTool: items.applicationState.selectedTool,
  };
};

const mapDispatchToProps = dispatch => ({
  updateShapeProperties: id => dispatch(updateShapeProperties(id)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ToolOptions);
