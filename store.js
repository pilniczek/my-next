import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './modules';
import { types } from './store/actions/uiActions';

const init = {
  ui: {
    toggle: {
      menu: false,
    },
    visible: {
      'omnio-digital': true,
      siteone: true,
      shopup: true,
      zaraguza: false,
      recent: true,
      aging: true,
      old: false,
      large: true,
      moderate: true,
      smaller: true,
    },
    checked: {
      'omnio-digital': true,
      siteone: true,
      shopup: true,
      zaraguza: false,
      recent: true,
      aging: true,
      old: false,
      large: true,
      moderate: true,
      smaller: true,
    },
    sliderIsRunning: {
      'my-first-slider': false,
    },
    displayedSlide: {
      'my-first-slider': 0,
    },
  },
};

export const actionTypes = types;

export function initializeStore(initialState = init) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
