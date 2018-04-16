import { assert } from 'chai';
import { lorem } from 'faker';

import * as acts from '../../actions/categoriesAction';
import categoriesReducer  from '../categoriesReducer';

describe('categoriesReducer', () => {
	const initialState = {};

	it('Should return the initial state', () => {
		const state = categoriesReducer(undefined, {});
		assert.deepEqual(state, initialState);
	});

	it('Should handle FETCH_CATEGORIES_SUCCESS', async () => {
		const dumpItem = {
			"id": 1,
			"name": lorem.word()
		}

		const dumpArrayItems = [dumpItem];

		const action = acts.fetchCategoriesSuccessAction(dumpArrayItems);
		const state = categoriesReducer(initialState, action);
		assert.deepEqual(state, {...initialState, 1: dumpItem });
	});
});