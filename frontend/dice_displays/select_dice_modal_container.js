import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectDiceModal from './select_dice_modal';
import * as modalActions from '../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalActions, dispatch),
});


export default connect(
  null,
  mapDispatchToProps
)(SelectDiceModal);
