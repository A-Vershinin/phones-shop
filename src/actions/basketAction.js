import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET } from '../constans/basketTypes';


export const addPhoneToBasketAction = id => dispatch => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id
  })
}

export const removePhoneFromBasket = id => async dispatch => {
  dispatch({
    type: REMOVE_PHONE_FROM_BASKET,
    payload: id
  })
}

export const cleanBasket = () => dispatch => {
  dispatch({
    type: CLEAN_BASKET
  })
}

export const basketCheckout = phones => () => {
  alert(JSON.stringify(phones))
}
