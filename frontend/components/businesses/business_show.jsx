import React from 'react';
import { Link } from "react-router-dom"

class BusinessShowComponent extends React.Component{
    componentDidMount() {
        this.props.fetchBusiness(this.props.businessId)
    }

    render(){
        if (!this.props.currentBusiness) {
            return null;
        }
        return(
            <div >
                <div className="pictures-array">

                </div>
                <div className="main-show">

                </div>


                <h1>{this.props.currentBusiness.name}</h1>
                <p>{this.props.currentBusiness.rating}</p>
                <p>{this.props.currentBusiness.bio}</p>
                <p>rating: {this.props.currentBusiness.rating}</p>
                <Link to="/businesses">home</Link>
            </div>
        )
    }
}

export default BusinessShowComponent;