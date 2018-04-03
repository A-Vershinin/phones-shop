import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import phonesReducer from './phonesReducer';

const reducer = combineReducers({
  phones: phonesReducer,
  routing: routerReducer,
});

export default reducer;
