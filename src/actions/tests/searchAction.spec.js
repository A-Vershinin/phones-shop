import { expect , assert } from 'chai';
import * as types from '../../constans/searchActionTypes';
import * as actions from '../searchAction';


describe('searchPhoneAction', () => {

	it('should handle SEARCH_PHONE', () => {
		const payload = {
			type: types.SEARCH_PHONE,
			text: 'hello'
		};

		const actionInit = actions.searchPhoneAction('hello');
		assert.isFunction(actionInit, payload);

	});
});
