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
                    <div className="show-title">
                        
                    </div>
                </div>


                <h1>{this.props.currentBusiness.name}</h1>
                <p>{this.props.currentBusiness.rating}</p>
                <p>{this.props.currentBusiness.bio}</p>
                <p>rating: {this.props.currentBusiness.rating}</p>
                <Link to="/">home</Link>
            </div>
        )
    }
}

export default BusinessShowComponent;