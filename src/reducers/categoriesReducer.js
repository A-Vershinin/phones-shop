import R from 'ramda';
import { FETCH_CATEGORIES_SUCCESS } from '../constans/categoriesTypes';

const initialState = {};


const categoriesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, newValues)
    default:
      return state;
  }
};

export default categoriesReducer;
