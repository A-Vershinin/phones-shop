import { expect, assert } from 'chai';
import { random } from 'faker';

import { addPhoneToBasketAction, removePhoneFromBasket, cleanBasket, basketCheckout } from '../../actions/basketAction';
import basketReducer from '../basketReducer';

describe('basketReducer', () => {
	const initialState = [];

	const mockID = random.number();

	it('Should return the initial state', () => {
    const state = basketReducer(undefined, []);
    assert.deepEqual(state, initialState);
  });

	it('Should handle ADD_PHONE_TO_BASKET', () => {
		const state = basketReducer(initialState, addPhoneToBasketAction(mockID));
		assert.deepEqual(state, [...initialState, mockID ]);
	});

	it('Should handle REMOVE_PHONE_FROM_BASKET', () => {
		const state = basketReducer([...initialState, mockID], removePhoneFromBasket(mockID));
		assert.deepEqual(state,  initialState );
	});

	it('Should handle CLEAN_BASKET', () => {
		const state = basketReducer(initialState, cleanBasket());
		assert.deepEqual(initialState, [])
	});
});
