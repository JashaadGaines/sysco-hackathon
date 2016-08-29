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
        var productNodes = this.state.data.sort((curr,next)=>{
            return this.urgencyOf(curr.status) - this.urgencyOf(next.status);
        }).map((product) => {
            var statusMap = {
                'Red': 'alert alert-danger',
                'Yellow': 'alert alert-warning',
                'Green': 'alert alert-success',
            };

            return (
            <div className={statusMap[product.status] || 'alert alert-info'}>
                <span>{product['size']} of </span>
                <span>{product.description}</span>
                <span> Avg: Order size: {product.avgPieces}</span>
            </div>
            );
        });
       return (
           <div>
               <Link to="/">Back</Link>
               <div className="customerOrderDetails">
                   <h4 className="page-header">Product Alerts</h4>
                   <ul>
                       {productNodes}
                   </ul>
               </div>
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




export default CustomerOrderDetails;