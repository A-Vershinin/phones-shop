import R from 'ramda';
import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, FETCH_PHONE_BY_ID_SUCCESS } from '../constans/phoneActionTypes';

const initialState = {
  phones: []
};

/* загружаем все телефоны с разных источников*/
export const phonesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, newValues);

    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, moreValues)

    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state)

    default:
      return state;
  }
};
