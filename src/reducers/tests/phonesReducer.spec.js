import { expect, assert } from 'chai';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import { random, lorem, commerce, image } from 'faker';

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

	it.skip('Should handle FETCH_PHONES_SUCCESS', () => {

		const payload = {
				id: random.number,
				categoryId: random.number,
				name: lorem.word,
				description: lorem.paragraph,
				price: commerce.price,
				image: image.image,
				cpu: lorem.words,
				camera: lorem.words,
				size: lorem.words,
				weight: lorem.words,
				display: lorem.words,
				battery: lorem.words,
				memory: lorem.words
		}

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
