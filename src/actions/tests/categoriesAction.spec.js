import { expect, assert, should } from 'chai';
import { sinon, spy } from 'sinon';
import { fetchMock } from 'fetch-mock';
import thunk from 'redux-thunk';

import * as types from '../../constans/categoriesTypes';
import * as actions from '../categoriesAction';
import { fetchCategories as fetchCategoriesApi } from '../../api/fetchCategoriesApi';

describe('search actions', () => {

	it('searchPhoneAction should create SEARCH_PHONE action', () => {
		// const payload = {
		// 	type: types.SEARCH_PHONE,
		// 	text: 'hello'
		// };
		//
		// const actionInit = actions.searchPhoneAction('hello');
		// assert.isFunction(actionInit, payload);

	});
});
