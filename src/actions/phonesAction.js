import { FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE, FETCH_PHONES_ONLY,
  LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_SUCCESS, LOAD_MORE_PHONES_FAILURE } from '../constans/phoneActionTypes';
import {fetchPhones as fetchPhonesApi} from '../api/fetchPhonesApi';
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

export const fetchPhonesAction = () => async dispatch => {
  dispatch({type: FETCH_PHONES_START});
  try {
    const phones = await fetchPhonesApi();
    // console.log(phones);

    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    });

    // console.log('3232', getPhones);

    /* получили первые 6 объектов */
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: getPhones
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
  // const offset = getRenderedPhonesLength(getState())

  // console.log("смещение", offset)

  dispatch({type: LOAD_MORE_PHONES_START})
  try {
    const phones = await fetchPhonesApi()

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
