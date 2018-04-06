import R from 'ramda';

import { ADD_PHONE_TO_BASKET } from '../constans/basketActionTypes';

const initialState = []

const basketReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      const item = parseInt(payload)
      return R.append(item, state)
    default:
      return state
  }
}

export default basketReducer;
