import { ADD_PHONE_TO_BASKET } from '../constans/basketActionTypes';


export const addPhoneToBasketAction = id => dispatch => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id
  })
}
