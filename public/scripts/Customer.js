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
            <Link to="/products">
                <div className={statusMap[this.props.status] || 'alert alert-info'}>
                    <h4 className="alert-heading">{this.props.name}</h4>
                </div>
                {/*<h2 style={{color:this.props.status}}>{this.props.name}</h2>*/}
            </Link>
        )
    }
}

export default Customer;