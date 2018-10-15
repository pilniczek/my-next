import { connect } from 'react-redux';
import { checked, visible } from '../../store/actions/uiActions';
import { getChecked } from '../../store/selectors/uiSelectors';
import CardFilter from './CardFilter';


const mapStateToProps = (state, locals) => ({
  isChecked: getChecked(state)[locals.id],
});

const mapDispatchToProps = dispatch => ({
  actions: {
    visible: (id, isChecked) => dispatch(visible(id, isChecked)),
    checked: (id, isChecked) => dispatch(checked(id, isChecked)),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardFilter);
