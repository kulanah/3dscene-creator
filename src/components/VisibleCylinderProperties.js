import { CylinderProperties } from './CylinderProperties';
import { updateShapeProperties } from '../action/actionCreators';

import { connect } from 'react-redux';

const mapStateToProps = function(items, id){
  return {
    item: items.createItems[id.id],
  };
};

const mapDispatchToProps = dispatch => ({
  updateShapeProperties: id => dispatch(updateShapeProperties(id)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CylinderProperties);