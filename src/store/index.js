import { createStore, applyMiddleware  } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';


/* Создаём мидлвары. Связываем роутерМидлвар и history для переходов */


const configureStore = (initialState, history) => {
	const middlewares = [
			thunk,
			routerMiddleware(history),
	];

	const store = createStore(
	  rootReducer,
	  initialState,
	  composeWithDevTools(
	     applyMiddleware(...middlewares)
	  ),
	);


	return store;
}


export default configureStore;
