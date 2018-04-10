import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { phonesReducer } from './phonesReducer';
import { phonesPageReducer } from './phonesPageReducer';
import { phonePageReducer } from './phonePageReducer';
import basketReducer from './basketReducer';
import categoriesReducer from './categoriesReducer';

const reducer = combineReducers({
  routing: routerReducer,
  phonesReducer,
  phonesPageReducer,
  phonePageReducer,
  basketReducer,
  categoriesReducer
});

export default reducer;
