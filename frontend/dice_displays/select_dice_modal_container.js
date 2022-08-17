import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectDiceModal from './se'

const mapDispatchToProps = dispatch => ({
  modal_actions: bindActionCreators(modal_actions, dispatch),
});


export default connect(
  null,
  mapDispatchToProps
)(SelectDiceModal);
