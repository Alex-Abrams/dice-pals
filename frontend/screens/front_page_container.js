import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FrontPage from './front_page';
import * as modalActions from '../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalActions, dispatch),
});

const mapStateToProps = state => ({
  is_modal_toggled: (state.dice.toggled),
  dice_selection: (state.dice.selection),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
