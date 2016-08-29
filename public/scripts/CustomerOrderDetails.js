import React from 'react';
import {Link} from 'react-router';

class CustomerOrderDetails extends React.Component {

    constructor(props) {
        super(props);
        this.id = '';
        this.state = {data: []};
    }

    getOrderDetails(id){
        $.ajax({
            url: '/api/products/' + '000703',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data.products});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    componentDidMount() {
        this.getOrderDetails(this.props.params.id);
        setInterval(this.getOrderDetails.bind(this), 5000);
    }

    render(){
        var productNodes = this.state.data.map((product) => {
            return (
            <li>
                <span>{product['size']} of </span>
                <span>{product.description}</span>
                <span> Avg: Order size: {product.avgPieces}</span>
            </li>
            );
        });
           return (
               <div>
                   <Link to="/">Back</Link>
                   <div className="customerOrderDetails">
                       <ul>
                           {productNodes}
                       </ul>
                   </div>
               </div>
           )
       }
}




export default CustomerOrderDetails;