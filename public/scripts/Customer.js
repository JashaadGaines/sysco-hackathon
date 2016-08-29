import React from 'react';
import { Link } from 'react-router'

class Customer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link to="/products">
                <div className="customer">
                    <h2 style={{color:this.props.status}}>{this.props.name}</h2>
                </div>
            </Link>
        )
    }
}

export default Customer;