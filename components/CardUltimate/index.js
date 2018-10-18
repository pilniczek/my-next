import { connect } from 'react-redux';
import { getVisible } from '../../store/selectors/uiSelectors';
import CardUltimate from './CardUltimate';


const mapStateToProps = (state, locals) => {
  console.log(locals.influence);
  return ({
    visible:
      getVisible(state)[locals.company]
      && getVisible(state)[locals.age]
      && getVisible(state)[locals.influence],
  });
};

export default connect(
  mapStateToProps,
)(CardUltimate);
