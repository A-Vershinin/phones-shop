import { combineReducers } from 'redux';
import phonesReducer from './phonesReducer';

const reducer = combineReducers({
  phones: phonesReducer,
});

export default reducer;
