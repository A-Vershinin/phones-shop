import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import phonesReducer from './phonesReducer';

const reducer = combineReducers({
  router: routerReducer,
  phones: phonesReducer,
});

export default reducer;
