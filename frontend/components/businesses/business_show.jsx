import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from '../search_bar'
import HeaderContainer from '../header_container'

class BusinessShowComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {loading: true}
    }

    
    componentDidMount() {
        // this.props.fetchBusiness(this.props.businessId)
        this.props.fetchBusiness(this.props.match.params.businessId)
            .then(()=> {
                this.setState({loading: false})
            })
    }

    render(){
        if(this.state.loading){
            return <div></div>
        }
        if (!this.props.currentBusiness) {
            return null; 
        }
        return(
            <div >
                <div  className="show-header">
                    {/* <HeaderContainer businessId={this.props.businessId}/> */}
                    <HeaderContainer businessId={this.props.currentBusiness.id}/>
                    {/* <SearchBar /> */}
                </div>
                <div className="pictures-array">
                    {this.props.currentBusiness.photoUrls.map((p, i) => (
                        <div className="picture-holder" key={i}>
                            <img className="show-picture" src={p}/>
                        </div>
                    ))}
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