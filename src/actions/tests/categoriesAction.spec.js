import { expect, assert, should } from 'chai';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { random, lorem } from 'faker';

import * as types from '../../constans/categoriesTypes';
import * as actions from '../categoriesAction';
import categories from '../../api/mockCategories';

const item = {
	"id": random.number(),
	"name": lorem.word()
};

const error = {
	status: 500
};

describe('fetchCategoriesActions', () => {
	it('should handle FETCH_CATEGORIES_START', () => {
    assert.deepEqual(actions.fetchCategoriesStartAction(), actions.fetchCategoriesStartAction());
	});

	it('should handle FETCH_CATEGORIES_SUCCESS', () => {
		const state = actions.fetchCategoriesSuccessAction(item);
		assert.deepEqual(state, {type: types.FETCH_CATEGORIES_SUCCESS, payload: item});
	});

	it('should handle FETCH_CATEGORIES_FAILURE', () => {
		const state = actions.fetchCategoriesFailureAction(error);
		assert.deepEqual(state, {type: types.FETCH_CATEGORIES_FAILURE, payload: error, error: true});
	});



	// мокаем стор и мидлвары
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);

	describe('fetchCategoriesAction async', () => {
		describe('test from sinon', () => {

			it('should handle FETCH_CATEGORIES_SUCCESS', async () => {
				const spyDispatch = sinon.spy(); // сделали эмулятор вызова функции, возвращается объект

				const action = actions.fetchCategoriesAction(); // сохраняем вызыв самого экшена fetchCategoriesAction

				/* у экшена есть аргумент диспатч. Вызываем экшен и передаём в аргумент dispatch вызов ненастоящей функции-эмулятора */

				await action(spyDispatch);

				/* у объекта  spyDispatch есть метод, показывающий аргументы. */
				const calls = spyDispatch.getCalls();

				/* получаем массив объектов. Каждый вызов диспатча в экшене будет одним объектом.
				В args можно посмотреть свойства types и payload что пришло при вызове диспатчера.
				Проверяем что было 2 вызова диспатчера START и SUCCESS. Сколько вызовов было такая и длина массива.
				*/

				assert.equal(calls.length, 2); // проверяем

				/* проверяем что первый был START и второй SUCCESS, при каждом
				вызове приходил такой же тип экшена и payload */
				const firstCall = calls[0];
				const secondCall = calls[1];

				// 1 запрос начался
				assert.deepEqual(firstCall.args[0], actions.fetchCategoriesStartAction());

				// 2 запрос завершился успешно
				assert.deepEqual(secondCall.args[0], actions.fetchCategoriesSuccessAction(categories));
			})


			/* Для проверки теста в экшене раскоментировать throw ({ status: 500 }) */
			it.skip('should handle FETCH_CATEGORIES_FAILURE', async () => {
				const asnwerFromServer = { status: 500 }; // если запрос был fail, сервер отдаёт 500

				const spyDispatch = sinon.spy();

				const action = actions.fetchCategoriesAction();

				await action(spyDispatch);

				const calls = spyDispatch.getCalls();

				assert.equal(calls.length, 2);

				const firstCall = calls[0];
				const secondCall = calls[1];

				// 1 запрос начался
				assert.deepEqual(firstCall.args[0], actions.fetchCategoriesStartAction());

				// 2 запрос упал с ошибкой
				assert.deepEqual(secondCall.args[0], actions.fetchCategoriesFailureAction(asnwerFromServer));
			});
		});

		describe('test from redux-mock-store', () => {
			let store = null;

			beforeEach(() => {
				store = mockStore({});
			});

			afterEach(() => {
				store.clearActions();
			});

			it('should handle FETCH_CATEGORIES_SUCCESS', () => {
				/* в массив передаём 2 запроса, т.к. было 2 диспатча для success */
				const expectedActions = [actions.fetchCategoriesStartAction(), actions.fetchCategoriesSuccessAction(categories)];

				return store.dispatch(actions.fetchCategoriesAction())
				 .then(() => {
					 const actualActions = store.getActions();
					 assert.deepEqual(actualActions, expectedActions);
				})
			});

			/* Для проверки теста в экшене раскоментировать throw ({ status: 500 }) */
			it.skip('should handle FETCH_CATEGORIES_FAILURE', () => {

				/* при эмуляции сервера и запроса на реальный url получали бы ответ с ошибкой */
				const asnwerFromServer = { status: 500 }; // если запрос был fail, сервер отдаёт 500

				const expectedActions = [actions.fetchCategoriesStartAction(), actions.fetchCategoriesSuccessAction(categories)];

				return store.dispatch(actions.fetchCategoriesAction())
				 .then(() => {
					 const actualActions = store.getActions();

					 // 1 запрос начался
					 assert.deepEqual(actualActions[0], actions.fetchCategoriesStartAction());

					 // 2 запрос упал с ошибкой
					 const failureAction = actions.fetchCategoriesFailureAction(asnwerFromServer)
					 assert.deepOwnInclude(actualActions[1], failureAction);
				})
			});
		});
	});
})
