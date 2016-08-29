import React from 'react';
import { Link } from 'react-router'

class Customer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        var backgroundStyle = {
            "background-image": "url('assets/red_tomatoes.jpg')"
        };

        return(
            <Link to="/products">
                <div contentEditable="True" className="card2 col-sm-4">
                    <div>
                        <div class="cardhead" style={backgroundStyle}>
                            <div class="cardtitles">
                                <h3>{this.props.name}</h3>
                                <h4>#{this.props.shipTo} - Opco: {this.props.opco}</h4>
                            </div>
                        </div>
                        <div className="cardcontent">
                        </div>
                    </div>
                </div>
                    {/*<h2 style={{color:this.props.status}}>{this.props.name}</h2>*/}
            </Link>
        )
    }
}

export default Customer;