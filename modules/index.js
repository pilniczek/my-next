import { combineReducers } from 'redux';
import uiReducer from '../store/reducers/uiReducers';

export default combineReducers({
  ui: uiReducer,
});
