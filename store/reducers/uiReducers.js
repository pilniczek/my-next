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

export default combineReducers({
  toggle,
});
