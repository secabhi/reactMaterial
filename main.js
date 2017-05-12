import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './src/components/homePage';
import PasswordPage from './src/components/passwordPage';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render((

    <Router history={hashHistory}>
        <Route path="/" component={HomePage}/>
        <Route path="/password" component={PasswordPage}/>
    </Router>
), document.getElementById('app'))
