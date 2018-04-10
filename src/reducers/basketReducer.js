import R from 'ramda';

import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET } from '../constans/basketTypes';

const initialState = []

const basketReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      const item = parseInt(payload)
      // return R.append(item, state)
      return R.append(payload, state)

    case REMOVE_PHONE_FROM_BASKET:
      console.log(state)
      return R.without(R.of(payload), state)

    default:
      return state
  }
}

export default basketReducer;
