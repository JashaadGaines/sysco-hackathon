import React from 'react';
import { Link } from 'react-router'

class Customer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var statusMap = {
            'Red': 'alert alert-danger',
            'Yellow': 'alert alert-warning',
            'Green': 'alert alert-success',
        }

        return(
            <Link to="/products" className="alert-card">
                <div className={statusMap[this.props.status] || 'alert alert-info'}>
                    <h4 className="alert-heading">{this.props.name}</h4>
                </div>
            </Link>
        )
    }
}

export default Customer;