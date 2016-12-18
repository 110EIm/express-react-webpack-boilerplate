import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {App, Home} from 'containers';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
    </Route>
</Router>, rootElement);
