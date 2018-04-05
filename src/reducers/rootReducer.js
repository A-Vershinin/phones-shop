import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { phonesReducer } from './phonesReducer';
import { phonesPageReducer } from './phonesPageReducer.js';

const reducer = combineReducers({
  routing: routerReducer,
  phonesReducer,
  phonesPageReducer
});

export default reducer;
