import { combineReducers } from 'redux';
import { types } from '../actions/uiActions';

const toggle = (state = {}, action = {}) => {
  switch (action.type) {
    case types.TOGGLE: {
      return Object.assign({}, state, {
        [action.id]: !action.open,
      });
    }
    default: {
      return state;
    }
  }
};

const visible = (state = {}, action = {}) => {
  switch (action.type) {
    case types.VISIBLE: {
      return Object.assign({}, state, {
        [action.id]: !action.isVisible,
      });
    }
    default: {
      return state;
    }
  }
};

const checked = (state = {}, action = {}) => {
  switch (action.type) {
    case types.CHECKED: {
      return Object.assign({}, state, {
        [action.id]: !action.isChecked,
      });
    }
    default: {
      return state;
    }
  }
};

const sliderIsRunning = (state = {}, action = {}) => {
  switch (action.type) {
    case types.SLIDER_IS_RUNNING: {
      return Object.assign({}, state, {
        [action.id]: action.setSliderIsRunning,
      });
    }
    default: {
      return state;
    }
  }
};

const displayedSlide = (state = {}, action = {}) => {
  switch (action.type) {
    case types.DISPLAYED_SLIDE: {
      return Object.assign({}, state, {
        [action.id]: action.setDisplayedSlide,
      });
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  toggle,
  visible,
  checked,
  sliderIsRunning,
  displayedSlide,
});
