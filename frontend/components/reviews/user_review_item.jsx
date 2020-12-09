import React from 'react'
import { connect } from 'react-redux';
import { removeReview } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'

// const mSTP = (state) => {
//     return {
//         business: state.entities.businesses[ownProps.businessId]
//     }
// }

// const mDTP = (dispatch) => {
//     return {
//         removeReview: (reviewId) => dispatch(removeReview(reviewId)),
//         fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
//     } 
// }

class UserReviewsItem extends React.Component {
    constructor(props) {
        super(props)
        
    }

    // componentDidMount(){
    //     this.props.fetchBusiness(this.props.businessId)
    // }

    // handleDelete(e) {
    //     e.preventDefault();
    //     this.props.removeReview(this.props.review.id)
    // }

    currentStars() {
        return (
            <div className="starRating-current">
                {[...Array(5)].map((star, i) => {
                    return (
                        // <div>
                        <i className="fas fa-star"
                            key={i}
                            id={i + 1 <= this.props.review.rating ? "checked" : "notChecked"}>
                        </i>
                        // </div>
                    )
                })}
            </div>
        )
    }

    render() {
        // if (this.state.loading) {
        //     return <div></div>
        // }
        //   if (!this.props.reviews) {
        //     return null;
        // }
        return (
            <li>
                <div className="reviews">
                    <div className="profile-picture">
                    </div>
                    <div className="review-user-detail">
                        <h3 className="review-username">{this.props.businesses}</h3>
                        {/* <h3 className="review-username">{state.entities.businesses[this.props.key].name}</h3> */}
                        <p><b>99</b> friends</p>
                        <p>4 reviews</p>
                    </div>
                    <div className="review-content">
                        <div>
                            {/* <img className="rating-img" id="review-rating" src={window.rating4} /> */}
                            {this.currentStars()}
                        </div>
                        <div className="review-body">
                            {this.props.review.body}
                        </div>
                    </div>
                    <div className="delete-review">
                        <button onClick={() => this.props.removeReview(this.props.review.id)}>Delete</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default UserReviewsItem;
// export default connect(mSTP, mDTP)(UserReviewsItem)