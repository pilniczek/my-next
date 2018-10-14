import { connect } from 'react-redux';
import { toggle } from '../../store/actions/uiActions';
import uiSelectors from '../../store/selectors/uiSelectors';
import Navbar from './Navbar';


const mapStateToProps = (state, locals) => ({
  open: typeof locals.open === 'undefined' || uiSelectors.getToggle(state)[locals.id]
    ? uiSelectors.getToggle(state)[locals.id]
    : locals.open,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    toggle: (id, open) => dispatch(toggle(id, open)),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
