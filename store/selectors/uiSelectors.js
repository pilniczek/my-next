import { get } from 'lodash';

const getToggle = state => get(state, 'ui.toggle', {});

export {
  getToggle,
};

const getVisible = state => get(state, 'ui.visible', {});

export {
  getVisible,
};

const getChecked = state => get(state, 'ui.checked', {});

export {
  getChecked,
};

const getSliderIsRunning = state => get(state, 'ui.sliderIsRunning', {});

export {
  getSliderIsRunning,
};

const getDisplayedSlide = state => get(state, 'ui.displayedSlide', {});

export {
  getDisplayedSlide,
};
