import { connect } from 'react-redux';
import { toggle } from '../../store/actions/uiActions';
import uiSelectors from '../../store/selectors/uiSelectors';
import Navbar from './Navbar';


const mapStateToProps = (state, locals) => ({
  open: locals.open
    ? uiSelectors.getToggle(state).indexOf(locals.id) === -1
    : uiSelectors.getToggle(state).indexOf(locals.id) !== -1,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    toggle: id => dispatch(toggle(id)),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
