import React from "react";
import App from "./App";
import CustomerOrderDetails from './CustomerOrderDetails';
import {Router, Route, hashHistory } from 'react-router'

const Main = () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/products" component={CustomerOrderDetails}/>
    </Router>
);

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);