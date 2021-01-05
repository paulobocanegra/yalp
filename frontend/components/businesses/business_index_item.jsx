import React from 'react';
import { Link } from 'react-router-dom';
import AvgRating from '../reviews/avg_rating_container'

class BusinessIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // this.props.fetchBusiness(this.props.business.id);
        this.props.fetchReviews(this.props.business.id)
    }
    
    // componentWillUnmount(){
    //     this.props.fetchReviews(this.props.business.id)
    // }

    render(){
        return(
            <div className="business-li">
                <Link to={`/businesses/${this.props.business.id}`}>
                    <div className="business-img-holder">
                        <img className="business-img" src={this.props.business.main_photoUrl} />
                    </div>
                </Link>
                <div className="business-bottom">
                    <li className="business-li-content">
                        <Link to={`/businesses/${this.props.business.id}`} className="business-link">{this.props.business.name}
                        </Link>
                        {/* <p className="bottom-description"><img className="index-rating-img" src={window.rating4} /></p> */}
                        <AvgRating businessId={this.props.business.id}
                                    fetchReviews={this.props.fetchReviews}
                                    />
                        <p className="bottom-description">{this.props.business.bio}</p>
                        <p className="bottom-description">{this.props.business.location}</p>
                    </li>
                </div>
            </div>
        )
    }
}

// const BusinessIndexItem = ({ business }) => {
//     return (
//         <div className="business-li">
//             <Link to={`/businesses/${business.id}`}>
//                 <div className="business-img-holder">
//                     <img className="business-img" src={business.main_photoUrl} />
//                 </div>
//                 </Link>
//             <div className="business-bottom">
//                 <li className="business-li-content">
//                     <Link to={`/businesses/${business.id}`} className="business-link">{business.name}
//                     </Link>
//                     {/* <p className="bottom-description"><img className="index-rating-img" src={window.rating4} /></p> */}
//                     <AvgRating businessId={this.props.business.id}
//                         reviews={this.props.reviews} />
//                         <p className="bottom-description">{business.bio}</p>
//                         <p className="bottom-description">{business.location}</p>
//                 </li>
//             </div>
//         </div>
//     )
// }

export default BusinessIndexItem;