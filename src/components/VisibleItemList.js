import { ItemList } from './ItemList';

import { connect } from 'react-redux';

import { deleteItem } from '../action/actionCreators';

const mapStateToProps = function(state){
  return {
    items: state.createItems,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);