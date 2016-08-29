import React from 'react';
import { Link } from 'react-router'

class Customer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var statusMap = {
            "RED": 'alert alert-danger alert-card',
            "YELLOW": 'alert alert-warning alert-card',
            "GREEN": 'alert alert-success alert-card',
        }

        return(
            <Link to="/products" className="alert-card">
                <div className={statusMap[this.props.status] || 'alert alert-info alert-card'}>
                    <h4 className="alert-heading">{this.props.name}</h4>
                </div>
            </Link>
        )
    }
}

export default Customer;