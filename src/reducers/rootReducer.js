import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { phonesReducer, phonesPageReducer } from './phonesReducer';

const reducer = combineReducers({
  phones: phonesReducer,
  phonesPageReducer,
  routing: routerReducer,
});

export default reducer;
