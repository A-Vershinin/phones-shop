import R from 'ramda';
import phones from './mockPhones';
import { phonesUrl } from './utils';

export const fetchPhones = async () => {
  return fetch(phonesUrl)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response;
    })
    .then((response) => response.json())
    .then(data => data.phones)
};



export const loadMorePhones = async (offset) => {
  return new Promise(resolve => {
    resolve(phones);
  });
};

export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject) => {
    const phone = R.find(R.propEq('id', id), phones)
    setTimeout(() => {
      resolve(phone)
    }, 1000);
  })
}
