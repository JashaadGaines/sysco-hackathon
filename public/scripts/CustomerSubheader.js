
import React from 'react';
import Subheader from 'material-ui/Subheader';

const subheader = () => (
    <div>
        <Subheader>My Customers</Subheader>
    </div>
);

class CustomerSubheader extends React.Component {
    render(){
        return (subheader());
    }
}

export default CustomerSubheader;