import { ThreeDScene } from './ThreeDScene';
import { connect } from 'react-redux';

const mapStateToProps = function(state){
  return {
    items: state.createItems,
  }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreeDScene)