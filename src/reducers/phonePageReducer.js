import R from 'ramda';
import { FETCH_PHONE_BY_ID_SUCCESS, FETCH_PHONE_BY_ID_START } from '../constans/phoneActionTypes';


const initialState = {
  pending: false,
  data: {}
};


export const phonePageReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONE_BY_ID_START:
      return { ...state, pending: true };

    case FETCH_PHONE_BY_ID_SUCCESS:
      // return R.merge(state, {
      //   id: R.prop('id', payload)
      // })
      return {...state, data: payload, pending: false };

    default:
      return state
    }
}
