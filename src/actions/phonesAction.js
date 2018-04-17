import { FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_SUCCESS, LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONE_BY_ID_START, FETCH_PHONE_BY_ID_SUCCESS, FETCH_PHONE_BY_ID_FAILURE } from '../constans/phoneActionTypes';
import {
  fetchPhones as fetchPhonesApi, loadMorePhones as loadMorePhonesApi, fetchPhoneById as fetchPhoneByIdApi,
} from '../api/fetchPhonesApi';

import { getPhones, getRenderedPhonesLength } from '../selectors/selectors';

export const fetchPhonesStartAction= () => ({
  type: FETCH_PHONES_START
});

export const fetchPhonesSuccesPhonesAction = (phones) => ({
  type: FETCH_PHONES_SUCCESS,
  payload: phones
});

export const fetchPhonesSuccesDataAction = (data) => ({
  type: FETCH_PHONES_SUCCESS,
  payload: data
});

export const fetchPhonesFailureAction = (err) => ({
  type: FETCH_PHONES_FAILURE,
  payload: err,
  error: true
});

export const fetchPhonesAction = () => async (dispatch) => {
  dispatch(fetchPhonesStartAction());
  try {
    const phones = await fetchPhonesApi();

    dispatch(fetchPhonesSuccesPhonesAction(phones));

  } catch (err) {
    dispatch(fetchPhonesFailureAction(err));
  }
};
 /* -----------------------------------------------------------------------------*/

export const loadMorePhonesStartAction = () => ({
  type: LOAD_MORE_PHONES_START
});

export function loadMorePhonesSuccessAction(phones) {
  return {
    type: LOAD_MORE_PHONES_SUCCESS,
    payload: phones
  }
};

export const loadMorePhonesFailureAction = (err) => ({
  type: LOAD_MORE_PHONES_FAILURE,
  payload: err,
  error: true
});

export const loadMorePhonesAction = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState());
  dispatch(loadMorePhonesStartAction());

  try {
    const phones = await loadMorePhonesApi(offset)

    dispatch(loadMorePhonesSuccessAction(phones));

  } catch (err) {
    dispatch(loadMorePhonesFailureAction(err));
  }
}
 /* -----------------------------------------------------------------------------*/

export const fetchPhoneByIdStart = () => ({
  type: FETCH_PHONE_BY_ID_START
});

export function fetchPhoneByIdSuccess(phone) {
  return {
    type: FETCH_PHONE_BY_ID_SUCCESS,
    payload: phone

  }
};

export const fetchPhoneByIdFailure = (err) => ({
  type: FETCH_PHONE_BY_ID_FAILURE,
  payload: err,
  error: true
});


export const fetchPhoneById = (id) => async dispatch => {
  dispatch(fetchPhoneByIdStart());

  try {
    // throw ({ status: 500 })

    const phone = await fetchPhoneByIdApi(id);
    dispatch(fetchPhoneByIdSuccess(phone));

  } catch (err) {
    dispatch(fetchPhoneByIdFailure(err))
  }
}
