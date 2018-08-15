import { ItemList } from './ItemList';

import { connect } from 'react-redux';

import { deleteItem } from '../action/actionCreators';
import { selectItem } from '../action/actionCreators';

const mapStateToProps = function(state){
  return {
    items: state.itemList,
    selectedItem: state.applicationState.selectedItem,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id)),
  selectItem: id => dispatch(selectItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);