import { expect, assert } from 'chai';
import { random, lorem, commerce, image } from 'faker';
import * as acts from '../../actions/phonesAction';
import { phonesReducer } from '../phonesReducer';

import { dumpPhones, item } from '../../utils/utilsReducers';

describe('phonesReducer', () => {
	const initialState = {
		phones: []
	};

	it('Should return the initial state', () => {
		const state = phonesReducer(undefined, {});
		assert.deepEqual(state, initialState);
	});

	it('Should handle FETCH_PHONES_SUCCESS', () => {
		const state = phonesReducer(initialState, acts.fetchPhonesSuccesPhonesAction(dumpPhones));
		assert.deepEqual(state, {...initialState,  1: item });
	});

	it('Should handle LOAD_MORE_PHONES_SUCCESS', () => {
		const state = phonesReducer(initialState, acts.loadMorePhonesSuccessAction(dumpPhones));
		assert.deepEqual(state, {...initialState, 1: item });
	});
});
