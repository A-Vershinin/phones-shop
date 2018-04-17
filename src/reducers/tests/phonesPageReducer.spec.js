import { expect, assert } from 'chai';
import { random, lorem, commerce, image } from 'faker';
import * as acts from '../../actions/phonesAction';
import { phonesPageReducer } from '../phonesPageReducer';

import { item, dumpPhones, number } from '../../utils/utilsReducers';

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
		const action = acts.fetchPhonesSuccesPhonesAction(dumpPhones);
		const state = phonesPageReducer(initialState, action);
		assert.deepEqual(state, {...initialState,  ids: [1: item] });
	});

	it.skip('Should handle LOAD_MORE_PHONES_SUCCESS', () => {
		const action = acts.loadMorePhonesSuccessAction(dumpPhones);
		const state = phonesPageReducer(initialState, action);
		assert.deepEqual(state, { ...initialState, ids: [number: item] , ids: [number: item, ...item] });
	});
});
