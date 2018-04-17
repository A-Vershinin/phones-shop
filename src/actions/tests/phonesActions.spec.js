import { expect, assert, should } from 'chai';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

import * as types from '../../constans/phoneActionTypes';
import * as acts from '../phonesAction';
import { phonesArray, itemPhone, number, item, strPhone, itemPhoneMock } from '../../utils/utilsActions';
import { phonesUrl } from '../../api/utils';


describe('Phones Actions', () => {

	describe('fetchPhonesAction', () => {

		it('should handle FETCH_PHONES_START', () => {
			const action = acts.fetchPhonesStartAction();
	    assert.deepEqual(action, action);
		});

		it('should handle FETCH_PHONES_SUCCESS Phones', () => {
			const state = acts.fetchPhonesSuccesPhonesAction(itemPhone);
			const action = {type: types.FETCH_PHONES_SUCCESS, payload: itemPhone};
			assert.deepEqual(state, action);
		});

		it('should handle FETCH_PHONES_SUCCESS Data', () => {
			const state = acts.fetchPhonesSuccesDataAction(itemPhone);
			const action = {type: types.FETCH_PHONES_SUCCESS, payload: itemPhone};
			assert.deepEqual(state, action);
		});

		it('should handle FETCH_PHONES_FAILURE', () => {
			const err = {};
			const state = acts.fetchPhonesFailureAction(err);

			const action = {type: types.FETCH_PHONES_FAILURE, payload: err, error: true};
			assert.deepEqual(state, action);
		});
	});

	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);

	describe('fetchPhonesAction async SUCCESS', () => {

		const header = { 'content-type': 'application/json' };
		let store = null;

		const mochData = {
			error: false,
			loading : false,
			phones: phonesArray
		};

		beforeEach(() => {
		  fetchMock.getOnce(phonesUrl, { body: mochData, headers: header });
			store = mockStore({});
	  });

		afterEach(() => {
			fetchMock.restore();
			store.clearActions();
		});

		it('should return phones', () => {

			const expectedActions = [
				acts.fetchPhonesStartAction(),
				acts.fetchPhonesSuccesPhonesAction(phonesArray)
			];

	    store = mockStore({ phones: phonesArray  });

			return store.dispatch(acts.fetchPhonesAction())
			 .then(() => {
				 const actualActions = store.getActions();
				 assert.deepEqual(actualActions, expectedActions);
			})
		});
	});

	describe('fetchPhonesAction async FAILURE', () => {
		const header = { 'content-type': 'application/json' };
		let store = null;

		const mochData = {
			error: false,
			loading : false,
			phones: phonesArray
		};

		const err = { status: 500 };

		beforeEach(() => {
			fetchMock.mock(phonesUrl, err);
			store = mockStore({});
		});

		afterEach(() => {
			fetchMock.restore();
			store.clearActions();
		});

		it('should return error', () => {

			const expectedActions = [
				acts.fetchPhonesStartAction(),
				acts.fetchPhonesFailureAction(err)];

			store = mockStore({ phones: phonesArray  });

			return store.dispatch(acts.fetchPhonesAction())
			 .then(() => {
				 const actualActions = store.getActions();

				 assert.deepEqual(actualActions[0], acts.fetchPhonesStartAction());

				 const failureAction = { type: types.FETCH_PHONES_FAILURE };

				 // кинули ошибку, сработал экшен
				 assert.deepOwnInclude(actualActions[1], failureAction);

				 // проверили что тип ошибки 500
				 assert.deepOwnInclude(actualActions[1].payload, err);
			})
		});

	});

	describe('fetchPhoneById', () => {
		it('should handle FETCH_PHONE_BY_ID_START', () => {
			const action = acts.fetchPhoneByIdStart();
			assert.deepEqual(action, action);
		});

		it('should handle FETCH_PHONE_BY_ID_SUCCESS', () => {
			const state = acts.fetchPhoneByIdSuccess(itemPhone);
			const action = {type: types.FETCH_PHONE_BY_ID_SUCCESS, payload: itemPhone};
			assert.deepEqual(state, action);
		});

		it('should handle FETCH_PHONES_FAILURE', () => {
			const err = {};
			const state = acts.fetchPhoneByIdFailure(err);
			const action = {type: types.FETCH_PHONE_BY_ID_FAILURE, payload: err, error: true};
			assert.deepEqual(state, action);
		});
	});

	describe('fetchPhoneById async', () => {
		let store = null;

		beforeEach(() => {
			store = mockStore({ });
		});

		afterEach(() => {
			store.clearActions();
		});

		it('should handle FETCH_PHONE_BY_ID_SUCCESS', () => {
			const expectedActions = [
				acts.fetchPhoneByIdStart(),
				acts.fetchPhoneByIdSuccess(itemPhoneMock)
			];

			return store.dispatch(acts.fetchPhoneById(strPhone))
			.then(() => {
				const actualActions = store.getActions();
				assert.deepEqual(actualActions, expectedActions);
			})
		});

		/* Для проверки теста в экшене раскоментировать throw ({ status: 500 }) */
		it.skip('should handle FETCH_PHONE_BY_ID_FAILURE', () => {
			const asnwerFromServer = { status: 500 };

			const expectedActions = [
				acts.fetchPhoneByIdStart(),
				acts.fetchPhoneByIdFailure(strPhone)
			];

			return store.dispatch(acts.fetchCategoriesAction())
			.then(() => {
				const actualActions = store.getActions();
				assert.deepEqual(actualActions[0], acts.fetchPhoneByIdStart());

				const failureAction = acts.fetchPhoneByIdFailure(asnwerFromServer)
				assert.deepOwnInclude(actualActions[1], failureAction);
			})
		});
	});

	describe('loadMorePhones', () => {

		it('should handle LOAD_MORE_PHONES_START', () => {
			const action = acts.loadMorePhonesStartAction();
			assert.deepEqual(action, action);
		});

		it('should handle LOAD_MORE_PHONES_SUCCESS', () => {
			const state = acts.loadMorePhonesSuccessAction(itemPhone);
			const action = {type: types.LOAD_MORE_PHONES_SUCCESS, payload: itemPhone};
			assert.deepEqual(state, action);
		});

		it('should handle LOAD_MORE_PHONES_FAILURE', () => {
			const err = {};
			const state = acts.loadMorePhonesFailureAction(err);

			const action = {type: types.LOAD_MORE_PHONES_FAILURE, payload: err, error: true};
			assert.deepEqual(state, action);
		});
	});

	describe('loadMorePhonesAction async', () => {

		let store = null;

		beforeEach(() => {
			store = mockStore({ ids: []});
		});

		afterEach(() => {
			store.clearActions();
		});

		it.skip('should handle SUCCESS', () => {

			const expectedActions = [
				acts.loadMorePhonesStartAction(),
				acts.loadMorePhonesSuccessAction(itemPhone)
			];

			return store.dispatch(acts.loadMorePhonesAction())
			 .then(() => {
				 const actualActions = store.getActions();
				 assert.deepEqual(actualActions, expectedActionsd);
			})
		});

		it.skip('should handle FAILURE', () => {

			const asnwerFromServer = { status: 500 }; // если запрос был fail, сервер отдаёт 500

			const expectedActions = [
				acts.loadMorePhonesStartAction(),
				acts.loadMorePhonesFailureAction(asnwerFromServer)
			];

			return store.dispatch(actions.fetchCategoriesAction())
			 .then(() => {
				 const actualActions = store.getActions();

				 // 1 запрос начался
				 assert.deepEqual(actualActions[0], acts.loadMorePhonesAction());

				 // 2 запрос упал с ошибкой
				 const failureAction = acts.loadMorePhonesFailureAction(asnwerFromServer)
				 assert.deepOwnInclude(actualActions[1], failureAction);
			})
		});


	});

});
