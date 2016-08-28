import React from 'react';

class Customer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="customer">
                <h2>{this.props.name} - {this.props.opco}</h2>
            </div>
        )
    }
}

export default Customer;