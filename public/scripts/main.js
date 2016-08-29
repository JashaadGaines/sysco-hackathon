import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import {Router, Route, hashHistory } from 'react-router'


const Main = () =>
<Router history={hashHistory}>
    <MuiThemeProvider>
        <Route path="/" component={App}/>
    </MuiThemeProvider>
</Router>
);

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);