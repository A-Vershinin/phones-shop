import { FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE } from '../constans/phoneActionTypes';

const initialState = {
  phones: []
};

const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default phonesReducer;
