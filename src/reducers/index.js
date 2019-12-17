import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import todosReducer from './todosReducer';
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  todos: todosReducer
});
