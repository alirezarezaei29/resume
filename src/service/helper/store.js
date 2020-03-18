import { createStore } from 'redux';
import combineReducers from '../reducer/reducer';

const store = createStore(combineReducers);

export default store;
