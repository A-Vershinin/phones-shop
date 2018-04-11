import { expect, assert } from 'chai';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import { random, company, lorem, commerce, date } from 'faker';

import { fetchPhonesAction, loadMorePhonesAction, fetchPhoneById } from '../../actions/phonesAction';
import { phonesReducer } from '../phonesReducer';

describe('checkout reducer', () => {
	const initialState = {
		phones: []
	};

	it('Should return the initial state', () => {
    const state = phonesReducer(undefined, {});
    assert.deepEqual(state, initialState);
  });


	// it('should handle ADD_ITEM', () => {
	// 	const todoItem = {
	// 		type: types.ADD_ITEM,
	// 		item: 'hello'
	// 	};
	// 	expect(todos([], todoItem)).toEqual(['hello'])
	//
	// 	const todoItem2= {
	// 		type: types.ADD_ITEM,
	// 		item: 'bye'
	// 	};
	//  	expect(todos(['hello'], todoItem2)).toEqual(['bye','hello'])
	// })

	it.skip('Should handle FETCH_PHONES_SUCCESS', () => {

		const payload = [
			{
				id: '1',
		    categoryId: '1',
		    name: 'Apple iPhone 5c',
		    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta',
		    price: 823,
		    image: '/uploads/iphone5c-selection-hero-2013.png',
		    cpu: '1.3GHz Apple A6',
		    camera: '8mp (3264x2448)',
		    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
		    weight: '132 grams (4.7 ounces) with battery',
		    display: '4.0 326 pixel density',
		    battery: '1480 mAh',
		    memory: '16GB, 32GB and RAM 1 GB'
			}
		];

		const state = phonesReducer(initialState, fetchPhonesAction());

		assert.deepEqual(
			state,
			{...initialState, payload}
		);


		// const state = reducer(initialState, checkoutSendStart());
		//
		// expect(state).toMatchObject({
		// 		...initialState,
		// 		pending: true,
		// });
	});

});
