import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FrontPage from './front_page';
import * as modal_actions from '../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  modal_actions: bindActionCreators(modal_actions, dispatch),
});

const mapStateToProps = state => ({
  is_modal_toggled: (state.dice.toggled),
  dice_selection: (state.dice.selection),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
