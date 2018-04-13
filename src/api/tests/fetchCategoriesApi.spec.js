import { expect, assert, should } from 'chai';
import { sinon, spy } from 'sinon';
// import { fetchMock } from 'fetch-mock';
const fetchMock = require('fetch-mock');
import thunk from 'redux-thunk';


import { fetchCategories as fetchCategoriesApi } from '../fetchCategoriesApi';


describe('fetchCategoriesApi', () => {

	// const url = 'https://jsonplaceholder.typicode.com/users';

	beforeEach(() => {
  	 fetchMock.getOnce('/home', [{hello: 'world'}]);
  });

  afterEach(() => {
  	fetchMock.restore();
  });

  it('should return a collection object', async function() {

    // const result = await fetchCategoriesApi(url);
    // assert.equal(result.hello, 'world');
  });
});
