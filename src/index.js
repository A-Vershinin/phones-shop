import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from "./store/index";

import App from './App';

const history = createHistory();
const initialState = {};

/* Создаём историю для переходов. Используй роутинг через browser history*/
const store = configureStore(initialState, history);


/* ConnectedRouter связывает стор и роуты автоматически*/
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
