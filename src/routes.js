import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ListView from './containers/ListView/ListView';

export default (
    <Route path="/" component ={App}>
        <IndexRoute component={ListView}/>
    </Route>
);
