import { ThreeDScene } from './ThreeDScene';
import { connect } from 'react-redux';

const mapStateToProps = function(state){
  return {
    items: state.itemList,
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreeDScene);