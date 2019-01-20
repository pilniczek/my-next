import { connect } from 'react-redux';
import { setDisplayedSlide, setSliderIsRunning } from '../../store/actions/uiActions';
import { getSliderIsRunning, getDisplayedSlide } from '../../store/selectors/uiSelectors';
import Slider from './Slider';


const mapStateToProps = (state, locals) => ({
  sliderIsRunning: getSliderIsRunning(state)[locals.id],
  displayedSlide: getDisplayedSlide(state)[locals.id],
});

const mapDispatchToProps = dispatch => ({
  actions: {
    setDisplayedSlide: (id, displayedSlide) => dispatch(setDisplayedSlide(id, displayedSlide)),
    setSliderIsRunning: (id, sliderIsRunning) => dispatch(setSliderIsRunning(id, sliderIsRunning)),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Slider);
