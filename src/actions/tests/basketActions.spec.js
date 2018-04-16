import { expect , assert } from 'chai';
import * as types from '../../constans/basketTypes';
import * as acts from '../basketAction';
import { random, lorem, commerce, image } from 'faker';

const item = {
	"id": random.uuid(),
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

describe('basket actions', () => {
	const payload = random.uuid();

	it('should handle ADD_PHONE_TO_BASKET action', () => {
		const state = acts.addPhoneToBasketAction(payload);
		assert.deepEqual(state, {type: types.ADD_PHONE_TO_BASKET, payload});
	});

	it('should handle REMOVE_PHONE_FROM_BASKET action', () => {
		const state = acts.removePhoneFromBasket(payload);
		assert.deepEqual(state, {type: types.REMOVE_PHONE_FROM_BASKET, payload});
	});

	it('should handle CLEAN_BASKET action', () => {
		const state = acts.cleanBasket();
		assert.deepEqual(state, {type: types.CLEAN_BASKET});
	});

	it.skip('should handle BASKET_CHECKOUT action', () => {
		const str = JSON.stringify(item);
		const array = [str];

		const state = acts.basketCheckout(array);
		debugger
		assert.deepEqual(state, array);
	});
});
