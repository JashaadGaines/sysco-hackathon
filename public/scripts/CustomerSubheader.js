
import React from 'react';
import Subheader from 'material-ui/Subheader';

const subheader = () => (
    <div>
        <h3>My Customers</h3>
    </div>
);

class CustomerSubheader extends React.Component {
    render(){
        return (subheader());
    }
}

export default CustomerSubheader;