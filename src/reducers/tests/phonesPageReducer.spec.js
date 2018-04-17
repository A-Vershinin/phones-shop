import { expect, assert } from 'chai';
import { random, lorem, commerce, image } from 'faker';
import * as acts from '../../actions/phonesAction';
import { phonesPageReducer } from '../phonesPageReducer';

import { item, dumpPhones } from './utils';

describe('phonesPageReducer', () => {
	const initialState = {
	  ids: [],
	  search: '',
	};

	it('Should return the initial state', () => {
		const state = phonesPageReducer(undefined, {});
		assert.deepEqual(state, initialState);
	});

	it('Should handle FETCH_PHONES_SUCCESS', () => {
		const dumpPhones = [item];

		const state = phonesPageReducer(initialState, acts.fetchPhonesSuccesPhonesAction(dumpPhones));
		assert.deepEqual(state, {...initialState,  ids: [1: item] });
	});

	it('Should handle LOAD_MORE_PHONES_SUCCESS', () => {
		const dumpPhones = [item];

		const state = phonesPageReducer(initialState, acts.loadMorePhonesSuccessAction(dumpPhones));
		assert.deepEqual(state, { ...initialState, ids: [1: item] , ids: [1: item, ...item] });
	});
});
