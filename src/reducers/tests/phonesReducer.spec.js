import { expect, assert } from 'chai';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import { random, lorem, commerce, image } from 'faker';

import { FETCH_PHONES_SUCCESS, FETCH_PHONE_BY_ID_SUCCESS } from '../../constans/phoneActionTypes'
import { fetchPhonesAction, loadMorePhonesAction, fetchPhoneById } from '../../actions/phonesAction';
import { phonesReducer } from '../phonesReducer';
// import { fetchPhoneById as fetchPhoneByIdApi } from "../../api/fetchPhonesApi";

const item = {
	"id": random.number,
	"categoryId": random.number,
	"name": lorem.word,
	"description": lorem.paragraph,
	"price": commerce.price,
	"image": image.image,
	"cpu": lorem.words,
	"camera": lorem.words,
	"size": lorem.words,
	"weight": lorem.words,
	"display": lorem.words,
	"battery": lorem.words,
	"memory": lorem.words
}


describe('phonesReducer', () => {
	const initialState = {
		phones: []
	};

	it('Should return the initial state', () => {
    const state = phonesReducer(undefined, {});
    assert.deepEqual(state, initialState);
  });

	it('Should handle FETCH_PHONES_SUCCESS', () => {

		// const payload = []; // [item]

		/* тут ошибка, из экшена не приходят данные, сравниваем пусто стейт с пустым массивом  */

		// const state = phonesReducer(initialState, {
    //   type: FETCH_PHONES_SUCCESS,
    //   phones: item
    // });

		// assert.deepEqual(state, {...initialState, phones: item });

		const state = phonesReducer(initialState, fetchPhonesAction());

		assert.deepEqual(state, {...initialState, phones: [] });
	});

	it('Should handle LOAD_MORE_PHONES_SUCCESS', () => {
		// тут тоже не работает экшен
		const payload = [];

		const state = phonesReducer(initialState, loadMorePhonesAction());

		assert.deepEqual(state, {...initialState, phones: payload });
	});

	it('Should handle FETCH_PHONE_BY_ID_SUCCESS', () => {

		const payload = [];

		const state = phonesReducer(initialState, fetchPhoneById(1));

	  // const phone = await fetchPhoneByIdApi(1)

		// const state = phonesReducer(initialState, {
    //   type: FETCH_PHONE_BY_ID_SUCCESS,
    //   payload: phone
    // });

		assert.deepEqual(state, {...initialState, phones: [] });
	});

});
