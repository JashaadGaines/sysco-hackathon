import React from 'react';

class Customer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="customer">
                <h2 style={{color:this.props.status}}>{this.props.name}</h2>
            </div>
        )
    }
}

export default Customer;