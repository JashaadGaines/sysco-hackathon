
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
                this.setState({data: data.accounts});
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
        var customerNodes = this.state.data.sort((curr,next)=>{
            return this.urgencyOf(curr.status) - this.urgencyOf(next.status);
        }).map((data) => {
            return (
                    <Customer name={data.customerName}
                              key={data.customerShipTo}
                              shipTo = {data.customerShipTo}
                              opco={data.opco}
                              status={data.status}
                            >
                    </Customer>
            );
        });
        return (
            <div className="customerList">
                {customerNodes}
            </div>
        )
    }

    urgencyOf(status) {
        var statusMap = {
            'Red': 1,
            'Yellow': 2,
            'Green': 3,
        }

        return statusMap[status] || 4;
    }

}

export default CustomerList;