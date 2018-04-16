import R from 'ramda';
import { FETCH_CATEGORIES_SUCCESS } from '../constans/categoriesTypes';

const initialState = {};

const categoriesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      console.log(payload)
      const newValues = R.indexBy(R.prop('id'), payload)
        console.log(R.merge(state, newValues))
      return R.merge(state, newValues)
    default:
      return state;
  }
};

export default categoriesReducer;
