import { createStore, applyMiddleware  } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';

/* Создаём историю для переходов. Используй роутинг через browser history*/
export const history = createHistory();

/* Создаём мидлвары. Прокидываем в мидлвары history переходов */
const middleware = routerMiddleware(history);

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(middleware)
));


export default store;
