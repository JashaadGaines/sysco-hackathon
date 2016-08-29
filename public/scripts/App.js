import React from 'react';
import UserAvatar from './UserAvatar';
import CustomerSubheader from './CustomerSubheader';
import CustomerList from './CustomerList';
import {Router, Route, hashHistory } from 'react-router'

class App extends React.Component {
    render() {
        return(
            <div>
                <UserAvatar />
                <CustomerSubheader />
                <CustomerList url="/api/customers" pollInterval={2000}/>
            </div>
        )
    }
}

export default App;