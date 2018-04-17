import { assert } from 'chai';
import { lorem } from 'faker';

import * as acts from '../../actions/categoriesAction';
import categoriesReducer  from '../categoriesReducer';

import { dumpItem } from '../../utils/utilsReducers';

describe('categoriesReducer', () => {
	const initialState = {};

  it('Should return the initial state', () => {
		const state = categoriesReducer(undefined, {});
		assert.deepEqual(state, initialState);
	});

	it('Should handle FETCH_CATEGORIES_SUCCESS', async () => {

    const dumpArrayItems = [dumpItem];

		const action = acts.fetchCategoriesSuccessAction(dumpArrayItems);
		const state = categoriesReducer(initialState, action);
		assert.deepEqual(state, {...initialState, 1: dumpItem });
	});


});
