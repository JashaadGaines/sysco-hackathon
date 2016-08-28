
import React from 'react';
import Customer from './Customer';

class CustomerList extends React.Component {

    constructor(props){
        super(props);
        this.state = {data: []};
    };

    getCustomers(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    componentDidMount() {
        this.getCustomers();
        setInterval(this.getCustomers.bind(this), this.props.pollInterval);
    }

    render(){
        var customerNodes = this.state.data.map((data) => {
            return (
                <Customer name={data.customer}
                          key={data.opco}
                          opco={data.opco} >
                </Customer>
            );
        });
        return (
            <div className="customerList">
                {customerNodes}
            </div>
        )
    }

}

export default CustomerList;