import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/user-reducer';

const rootReducer = combineReducers({
  userReducer
});

export default createStore(rootReducer);
