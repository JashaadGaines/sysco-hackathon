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
                'Red': 'red_tomatoes.jpg',
                'Yellow': 'yellow_lemons.jpeg',
                'Green': 'scripts/green_limes.jpg',
            };

            function getUrl(){
                return "url(" + statusMap[product.status]+ ")"
            }

            var backgroundImg = {
                backgroundImage: getUrl()
            }

            return (
                <div className="row" key={product.supc}>
                    <div className="col-sm-6 col-md-4 alert-card">
                        <div className="thumbnail" style={backgroundImg}>
                            {/*<img src="/green_limes.jpg" alt="..."/>*/}
                                <div className="caption">
                                    <h3>{product.currentOrder} {product.size} pack of {product.description}</h3>
                                </div>
                            <span>Avg Qty Ordered: {product.avgPieces}</span>
                        </div>
                    </div>
                </div>
            );
        });
       return (
           <div>
               <Link to="/">Back</Link>
               <div className="customerOrderDetails">
                   <h4 className="page-header">Product Alerts</h4>
                   <ul className="center-ul">
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