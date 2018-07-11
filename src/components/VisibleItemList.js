import { ItemList } from './ItemList';

import { connect } from 'react-redux';



const mapStateToProps = function(state){
  console.log(state.createItems);
  return {
    items: state.createItems,
  }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)