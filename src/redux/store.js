import { combineReducers, createStore } from 'redux';
import userReducer from './redusers/user-reducer';

const rootReducer = combineReducers({
  userReducer
});

export default createStore(rootReducer);
