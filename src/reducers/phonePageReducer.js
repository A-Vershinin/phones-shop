import R from 'ramda';
import { FETCH_PHONE_BY_ID_SUCCESS } from '../constans/phoneActionTypes';


const initialState = {
  id: null
};


export const phonePageReducer = (state = initialState, {type, payload}) => {
  switch (type) {
  case FETCH_PHONE_BY_ID_SUCCESS:
    return R.merge(state, {
      id: R.prop('id', payload)
    })
    default:
      return state
  }
}
