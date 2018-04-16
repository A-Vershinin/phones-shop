import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET } from '../constans/basketTypes';

export const addPhoneToBasketAction = id => ({
  type: ADD_PHONE_TO_BASKET,
  payload: id
});

export const removePhoneFromBasket = id => ({
  type: REMOVE_PHONE_FROM_BASKET,
  payload: id
});

export const cleanBasket = ()  => ({
  type: CLEAN_BASKET
});

export const basketCheckout = phones => () => {
  console.log(phones)
  alert(JSON.stringify(phones));
}
