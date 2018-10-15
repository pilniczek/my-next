import { connect } from 'react-redux';
import { toggle } from '../../store/actions/uiActions';
import { getToggle } from '../../store/selectors/uiSelectors';
import Navbar from './Navbar';


const mapStateToProps = (state, locals) => ({
  open: getToggle(state)[locals.id],
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
