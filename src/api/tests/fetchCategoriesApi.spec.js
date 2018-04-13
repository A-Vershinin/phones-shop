import { expect, assert, should } from 'chai';
const fetchMock = require('fetch-mock');

import mockCategories from '../mockCategories';
import { fetchCategories as fetchCategoriesApi } from '../fetchCategoriesApi';


describe('fetchCategoriesApi method', () => {

	it('should return a collection object from fetchCategoriesApi', async function() {
		const result = await fetchCategoriesApi();
		assert.isArray(result, "it's collection object");
	});
});
