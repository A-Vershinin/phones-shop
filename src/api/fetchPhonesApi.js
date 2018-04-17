import R from 'ramda';
import phones from './mockPhones';

const phonesUrl = 'http://www.mocky.io/v2/5accd2a73200005c00776564';

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    fetch(phonesUrl)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json())
    .then(data => {resolve(data.phones)})
  });

  // return new Promise(resolve => {
  //   resolve(phones);
  // });
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
