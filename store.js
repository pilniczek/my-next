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
      aging: false,
      old: false,
    },
    checked: {
      'omnio-digital': true,
      siteone: true,
      shopup: true,
      zaraguza: false,
      recent: true,
      aging: true,
      old: false,
    },
  },
};

export const actionTypes = types;

export function initializeStore(initialState = init) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
