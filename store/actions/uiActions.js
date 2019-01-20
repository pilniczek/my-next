export const types = {
  TOGGLE: 'TOGGLE',
  VISIBLE: 'VISIBLE',
  CHECKED: 'CHECKED',
  SLIDER_IS_RUNNING: 'SLIDER_IS_RUNNING',
  DISPLAYED_SLIDE: 'DISPLAYED_SLIDE',
};

export const toggle = (id, open) => ({
  type: types.TOGGLE,
  id,
  open,
});

export const visible = (id, isVisible) => ({
  type: types.VISIBLE,
  id,
  isVisible,
});

export const checked = (id, isChecked) => ({
  type: types.CHECKED,
  id,
  isChecked,
});

export const setSliderIsRunning = (id, setSliderIsRunningNow) => ({
  type: types.SLIDER_IS_RUNNING,
  id,
  setSliderIsRunning: setSliderIsRunningNow,
});

export const setDisplayedSlide = (id, setDisplayedSlideNum) => ({
  type: types.DISPLAYED_SLIDE,
  id,
  setDisplayedSlide: setDisplayedSlideNum,
});
