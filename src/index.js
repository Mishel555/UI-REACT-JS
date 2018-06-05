import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import appData from './reducers';




let store = createStore(appData);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
