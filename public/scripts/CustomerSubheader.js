
import React from 'react';
import Subheader from 'material-ui/Subheader';

const subheader = () => (
    <div>
        <h4 className="page-header">My Customers</h4>
    </div>
);

class CustomerSubheader extends React.Component {
    render(){
        return (subheader());
    }
}

export default CustomerSubheader;