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
            <div className="main-show-container">
                <div className="main-show">
                    <ul className="show-info">
                        <li className="business-title">{this.props.currentBusiness.name}</li>
                            <li><img className="rating-img" src={window.rating4} /> </li>
                        <li className="business-bio">{this.props.currentBusiness.bio}</li>
                        {/* <li>{this.props.currentBusiness.location}</li>         */}
                        <button className="review-button-search">Write a Review</button>
                        <div className="reviews-container">
                                <div>
                                    <h1 className="recommended">Recommended Reviews
                                    </h1>
                                    <div className="trust-flex">
                                            <img className="header-logo-flex" src={window.logoURL} />
                                            <h2 className="warning-text"><b>Your trust is our top concern,</b> so businesses can't pay to alter or remove their reviews.
                                            </h2>
                                    </div>

                                </div>
                        </div>
                            {/* <hr/> */}
                        <div className="reviews">
                            <div className="profile-picture">
                            </div>
                            <div className="review-user-detail">
                                <h3 className="review-username">Username</h3>
                                <p><b>400</b> friends</p>
                                <p>235 reviews</p>
                            </div>
                            <div className="review-content">
                                <div>
                                    <img className="rating-img" id="review-rating" src={window.rating4} />    
                                </div>
                                <div className="review-body">
                                    <p >Lorem ipsum dolor sit amet, usu at dicam dolore inimicus. Ad voluptua definiebas vim, te vim omnes postulant. Oblique facilisis id qui. Eros latine pertinax no pri, his ei lorem nominati. Malis tractatos mnesarchum cum ut, at cibo sale pro. Qui ex nibh augue vituperata, ut nec fabulas evertitur vituperata. In eos natum populo malorum, equidem ancillae invenire nec ut, no his quas tation ponderum.
                                        Est quidam mnesarchum ex, in vidit fuisset adipiscing nam. Eam illud porro principes ea. Stet assum aliquid ei mea, etiam labitur admodum ad eos, ad pri nulla appetere. Fugit dicunt omittam cum ad, usu at dolor iriure vidisse. Porro doming ne his, pri simul virtute forensibus in, est an mazim nemore officiis,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
                {/* <div className="main-show-right">
                        <ul className="business-info-ul">
                            <li>{this.props.currentBusiness.phone_number}</li>
                            <li>Get Directions</li>
                        </ul>
                </div> */}
            


            </div>
        )
    }
}

export default BusinessShowComponent;