import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS } from '../constans/phoneActionTypes';
import { SEARCH_PHONE } from '../constans/searchActionTypes';
import R from 'ramda';

/* В этом редюсере будем хранить все данные, относящиеся к странице телефонов,
но которые на других страницах нам не пригодятся.*/
const initialState = {
  ids: [],
  search: '',
};

export const phonesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_SUCCESS:
      return R.merge(state, {
         ids: R.pluck('id', action.payload)
       })

    case LOAD_MORE_PHONES_SUCCESS:
      const ids = R.pluck('id', action.payload)
      return R.merge(state, {
       ids: R.concat(ids, state.ids)
      })
      
    case SEARCH_PHONE:
      return R.merge(state, {
        search: action.payload
    })
    default:
      return state;
  }
};
