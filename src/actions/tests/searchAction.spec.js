import { expect , assert } from 'chai';
import * as types from '../../constans/searchActionTypes';
import * as actions from '../searchAction';


describe('search actions', () => {

	it('searchPhoneAction should create SEARCH_PHONE action', () => {
		const payload = {
			type: types.SEARCH_PHONE,
			text: 'hello'
		};

		const actionInit = actions.searchPhoneAction('hello');
		assert.isFunction(actionInit, payload);

	});
});
