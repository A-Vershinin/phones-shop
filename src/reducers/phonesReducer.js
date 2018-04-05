import R from 'ramda';
import { FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_SUCCESS, LOAD_MORE_PHONES_FAILURE } from '../constans/phoneActionTypes';



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
      // const newValues = R.indexBy(R.prop('id'), payload);
      // return R.merge(state, newValues);

    case LOAD_MORE_PHONES_SUCCESS:
      // console.log(payload)
      // const moreValues = R.indexBy(R.prop('id'), payload);
      // console.log(R.merge(state, moreValues))
      // return R.merge(state, moreValues);

    default:
      return state;
  }
};
