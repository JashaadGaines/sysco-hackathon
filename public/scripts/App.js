import React from 'react';
import UserAvatar from './UserAvatar';
import CustomerSubheader from './CustomerSubheader';
import CustomerList from './CustomerList';

const App = () => (
    <div>
        <UserAvatar />
        <CustomerSubheader />
        <CustomerList url="/api/order-alerts" pollInterval={2000}/>
    </div>
);

export default App;