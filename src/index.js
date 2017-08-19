import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import {Provider} from 'react-redux'
import { createLogger } from 'redux-logger'

const logger = createLogger({});

/* __REDUX_... is special for the dev tools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
