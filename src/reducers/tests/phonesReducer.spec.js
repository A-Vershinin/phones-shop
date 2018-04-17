import { expect, assert } from 'chai';
import { random, lorem, commerce, image } from 'faker';
import * as acts from '../../actions/phonesAction';
import { phonesReducer } from '../phonesReducer';

// "id": random.uuid(),
const number = 1;

const itemNumber = {
	"id": number,
	"categoryId": random.number(),
	"name": lorem.word(),
	"description": lorem.paragraph(),
	"price": commerce.price(),
	"image": image.image(),
	"cpu": lorem.words(),
	"camera": lorem.words(),
	"size": lorem.words(),
	"weight": lorem.words(),
	"display": lorem.words(),
	"battery": lorem.words(),
	"memory": lorem.words()
};


describe('phonesReducer', () => {
	const initialState = {
		phones: []
	};

	it('Should return the initial state', () => {
		const state = phonesReducer(undefined, {});
		assert.deepEqual(state, initialState);
	});

	it('Should handle FETCH_PHONES_SUCCESS', () => {
		const dumpPhones = [itemNumber];

		const state = phonesReducer(initialState, acts.fetchPhonesSuccesPhonesAction(dumpPhones));
		assert.deepEqual(state, {...initialState,  1: itemNumber });
	});

	it('Should handle LOAD_MORE_PHONES_SUCCESS', () => {
		const dumpPhones = [itemNumber];

		const state = phonesReducer(initialState, acts.loadMorePhonesSuccessAction(dumpPhones));
		assert.deepEqual(state, {...initialState, 1: itemNumber });
	});
});
