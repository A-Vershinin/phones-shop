import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { phonesReducer } from './phonesReducer';
import { phonesPageReducer } from './phonesPageReducer';
import { phonePageReducer } from './phonePageReducer';

const reducer = combineReducers({
  routing: routerReducer,
  phonesReducer,
  phonesPageReducer,
  phonePageReducer
});

export default reducer;
