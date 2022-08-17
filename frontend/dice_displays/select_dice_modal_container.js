import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectDiceModal from './select_dice_modal';
import * as modal_actions from '../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  modal_actions: bindActionCreators(modal_actions, dispatch),
});


export default connect(
  null,
  mapDispatchToProps
)(SelectDiceModal);
