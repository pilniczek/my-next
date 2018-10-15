import { connect } from 'react-redux';
// import { visible } from '../../store/actions/uiActions';
import { getVisible } from '../../store/selectors/uiSelectors';
import CardUltimate from './CardUltimate';


const mapStateToProps = (state, locals) => ({
  visible: getVisible(state)[locals.company] && getVisible(state)[locals.age],
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardUltimate);
