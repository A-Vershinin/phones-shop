import R from 'ramda';
import { FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_SUCCESS, LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONE_BY_ID_SUCCESS } from '../constans/phoneActionTypes';

// export function fetchPhonesErrored(state = false, action) {
// 	switch (action.type) {
// 		case FETCH_PHONES_FAILURE:
// 			return action.error;
//
// 		default:
// 			return state;
// 	}
// }

// export function fetchPhonesLoading(state = false, action) {
// 	switch (action.type) {
// 		case FETCH_PHONES_START:
// 			return true;
// 		case FETCH_PHONES_SUCCESS:
// 			return false;
// 		default:
// 			return state;
// 	}
// }

const initialState = {
  phones: []
};

/* загружаем все телефоны с разных источников*/
export const phonesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return {
        ...state,
        phones: payload
    };

    case LOAD_MORE_PHONES_SUCCESS:
      return {
        ...state,
        phones: payload
    };

    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state)

    default:
      return state;
  }
};
