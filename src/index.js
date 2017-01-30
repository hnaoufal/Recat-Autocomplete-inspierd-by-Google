import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import thunk from 'redux-thunk';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={hashHistory} routes={routes} />
    </Provider>
    , document.querySelector('.app'));

