import React from 'react';
import UserAvatar from './UserAvatar';
import CustomerList from './CustomerList';

class App extends React.Component {
    render() {
        const URL = "/api/customers";
        const WEBSERVICE_URL = "https://joltvpa401.execute-api.us-east-1.amazonaws.com/CustList";
        return(
            <div>
                <UserAvatar />
                <CustomerList url={URL} pollInterval={30000}/>
            </div>
        )
    }
}

export default App;