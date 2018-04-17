import { expect, assert } from 'chai';
import { random } from 'faker';

import * as acts from '../../actions/basketAction';
import basketReducer from '../basketReducer';

import { mockID } from './utils';

describe('basketReducer', () => {
	const initialState = [];

	it('Should return the initial state', () => {
    const state = basketReducer(undefined, []);
    assert.deepEqual(state, initialState);
  });

	it('Should handle ADD_PHONE_TO_BASKET', () => {
		const state = basketReducer(initialState, acts.addPhoneToBasketAction(mockID));
		assert.deepEqual(state, [...initialState, mockID ]);
	});

	it('Should handle REMOVE_PHONE_FROM_BASKET', () => {
		const state = basketReducer([...initialState, mockID], acts.removePhoneFromBasket(mockID));
		assert.deepEqual(state,  initialState );
	});

	it('Should handle CLEAN_BASKET', () => {
		const state = basketReducer(initialState, acts.cleanBasket());
		assert.deepEqual(initialState, [])
	});
});
