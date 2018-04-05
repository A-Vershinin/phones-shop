import { FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE, FETCH_PHONES_ONLY,
  LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_SUCCESS, LOAD_MORE_PHONES_FAILURE } from '../constans/phoneActionTypes';
import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi
} from '../api/fetchPhonesApi';

import { getPhones, getRenderedPhonesLength} from '../selectors/selectors';

// export function fetchPhonesErrored(bool) {
//   return {
//     type: FETCH_PHONES_FAILURE,
//     payload: err,
//     error: bool
//   };
// }
//
// export function fetchPhonesSuccess(phones) {
//   return {
//     type: FETCH_PHONES_SUCCESS,
//     payload: phones
//   };
// }

export const fetchPhonesAction = () => async (dispatch, getState) => {
  dispatch({type: FETCH_PHONES_START});
  try {
    const phones = await fetchPhonesApi();

    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    });

    /* получили объекты из стора*/
    const data = getPhones(getState());
    // console.log(data)

    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: data
    });

  } catch (err) {
    dispatch({
        type: FETCH_PHONES_FAILURE,
        payload: err,
        error: true
      });
  }
};


export const loadMorePhonesAction = () => async (dispatch, getState) => {

  // console.log( getState())
  const offset = getRenderedPhonesLength(getState())
  dispatch({type: LOAD_MORE_PHONES_START})

  try {
    const phones = await loadMorePhonesApi(offset)
    // console.log("смещение", phones)

    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload: err,
      error: true
    })
  }
}
