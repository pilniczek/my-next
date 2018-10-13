import { combineReducers } from 'redux';
import { types } from '../actions/uiActions';

const toggle = (state = [], action = {}) => {
  switch (action.type) {
    case types.TOGGLE: {
      const position = state.indexOf(action.id);
      if (position !== -1) {
        return state.filter(item => item !== state[position]);
      }
      return [
        ...state,
        action.id,
      ];
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  toggle,
});
