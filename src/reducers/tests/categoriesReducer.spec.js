import { expect, assert } from 'chai';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import { random, lorem, commerce, image } from 'faker';

import { FETCH_CATEGORIES_SUCCESS } from '../../constans/categoriesTypes';
import { fetchCategoriesAction } from '../../actions/categoriesAction';
import categoriesReducer  from '../categoriesReducer';

// import { fetchPhoneById as fetchPhoneByIdApi } from "../../api/fetchPhonesApi";


describe('categoriesReducer', () => {
	const initialState = {};

	it('Should return the initial state', () => {
    const state = categoriesReducer(undefined, {});
    assert.deepEqual(state, initialState);
  });

	it('Should handle FETCH_CATEGORIES_SUCCESS', () => {

		const state = categoriesReducer(initialState, fetchCategoriesAction());

		// assert.deepEqual(state, {...initialState, dump});

		assert.deepEqual(state, {...initialState });
	});
});
