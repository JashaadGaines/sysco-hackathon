import React from 'react';
import UserAvatar from './UserAvatar';
import CustomerSubheader from './CustomerSubheader';
import CustomerList from './CustomerList';

class App extends React.Component {
    render() {
        return(
            <div>
                <UserAvatar />
                <CustomerSubheader />
                <CustomerList url="/api/customers" pollInterval={30000}/>
            </div>
        )
    }
}

export default App;