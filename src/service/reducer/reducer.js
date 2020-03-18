import { combineReducers } from 'redux';
import Login from './loginReducer';
import Manager from './managerReducer';

export default combineReducers({
  login: Login,
  manager: Manager,
});
