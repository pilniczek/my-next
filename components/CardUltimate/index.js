import { connect } from 'react-redux';
import { getVisible } from '../../store/selectors/uiSelectors';
import CardUltimate from './CardUltimate';


const mapStateToProps = (state, locals) => ({
  visible: getVisible(state)[locals.company] && getVisible(state)[locals.age],
});

export default connect(
  mapStateToProps,
)(CardUltimate);
