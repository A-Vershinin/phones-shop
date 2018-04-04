import { FETCH_PHONES_START, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE } from "../constans/phoneActionTypes";

import {fetchPhones as fetchPhonesApi} from '../api/fetchPhonesApi';

export const fetchPhones = () => async dispatch => {
	dispatch({type: FETCH_PHONES_START})
	try {
		const phones = await fetchPhonesApi();
		// console.log(phones);

    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    })
	} catch (err) {
		dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: err,
      error: true
    })
	}
}
