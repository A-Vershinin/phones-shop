import { SEARCH_PHONE } from '../constans/searchActionTypes';


export const searchPhoneAction = (text) => dispatch => {
  dispatch({
    type: SEARCH_PHONE,
    payload: text
  })
}
