import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from '../search_bar'
import HeaderContainer from '../header_container'

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
                <div  className="show-header">
                    <HeaderContainer businessId={this.props.businessId}/>
                    {/* <SearchBar /> */}
                </div>
                <div className="pictures-array">
                    <p>Photos Array</p>
                </div>
                <div className="main-show">
                    <ul className="show-info">
                        <li className="business-title">{this.props.currentBusiness.name}</li>
                        <li>rating: {this.props.currentBusiness.rating}</li>
                        <li className="business-bio">{this.props.currentBusiness.bio}</li>
                        {/* <li>{this.props.currentBusiness.location}</li>         */}
                        <button className="review-button-search">Write a Review</button>
                    </ul>
                </div>


            </div>
        )
    }
}

export default BusinessShowComponent;