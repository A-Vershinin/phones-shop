import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS } from '../constans/phoneActionTypes';


/* В этом редюсере будем хранить все данные, относящиеся к странице телефонов,
но которые на других страницах нам не пригодятся.*/
const initialState = {
  ids: []
};

export const phonesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_SUCCESS:
      return {
        ...state,
        ids: action.payload
      };
    case LOAD_MORE_PHONES_SUCCESS:
      return {
        ...state,
        ids: [...state.ids, ...action.payload]
      };


    default:
      return state;
  }
};
