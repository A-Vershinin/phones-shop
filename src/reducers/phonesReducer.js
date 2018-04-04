import { FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE } from '../constans/phoneActionTypes';

const initialState = {
};

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

/* загружаем все телефоны с разных источников*/
export const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_START:
      return true;

    case FETCH_PHONES_FAILURE:
      return false;

    case FETCH_PHONES_SUCCESS:
      return [
        ...state,
        {
         id: action.payload.id
        }
      ]
    default:
      return state;
  }
};

/* В этом редюсере будем хранить все данные, относящиеся к странице телефонов,
но которые на других страницах нам не пригодятся.*/
const initialStateIds = {
  ids: []
}

export const phonesPageReducer = (state = initialStateIds, action) => {
  switch (action.type) {
    case FETCH_PHONES_SUCCESS:
      return [
        ...state,
        {
         id: action.payload.id
        }
      ]
     // return R.merge(state, {
     //   ids: R.pluck('id', payload)
     // })
    default:
      return state;
  }
}
