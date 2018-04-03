import { createStore, applyMiddleware  } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';


/* Создаём мидлвары. Связываем роутерМидлвар и history для переходов */

const configureStore = (history) => {

	const middlewares = [
			thunk,
			routerMiddleware(history),
	];

	const store = createStore(
	  rootReducer,
	  composeWithDevTools(
	     applyMiddleware(...middlewares)
	  ),
	);


	return store;
}


export default configureStore;
