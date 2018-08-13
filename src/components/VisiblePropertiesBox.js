import { connect } from 'react-redux';
import { PropertiesBox } from './PropertiesBox';

const mapStateToProps = state => ({
  selectedItem: state.applicationState.selectedItem,
});

export default connect(
  mapStateToProps,
)(PropertiesBox);