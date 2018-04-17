import { expect, assert } from 'chai';
import * as acts from '../../actions/phonesAction';
import { phonePageReducer } from '../phonePageReducer';

import { dumpPhones } from './utils';

describe('phonePageReducer', () => {
	const initialState = {
		pending: false,
	  data: {}
	};

	it('Should return the initial state', () => {
		const state = phonePageReducer(undefined, {});
		assert.deepEqual(state, initialState);
	});

	it('Should handle FETCH_PHONE_BY_ID_START', () => {
		const state = phonePageReducer(initialState, acts.fetchPhoneByIdStart());
		assert.deepEqual(state, {...initialState, pending: true  });
	});

	it('Should handle FETCH_PHONE_BY_ID_SUCCESS', () => {
		const state = phonePageReducer(initialState, acts.fetchPhoneByIdSuccess(dumpPhones));
		assert.deepEqual(state, { ...initialState, data: dumpPhones, pending: false });
	});
});
