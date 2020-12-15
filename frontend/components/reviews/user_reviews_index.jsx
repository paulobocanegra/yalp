import React from "react";
import UserReviewsItem from "./user_review_item"
// import AverageRating from "./average_rating";

class UserReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.handleDelete = this.handleDelete.bind(this);
    }

    // handleDelete(e) {
    //     e.preventDefault();
    //     this.props.removeReview(this.props.review.id)
    // }

    // componentDidMount() {
    //     this.props.fetchReviews(this.props.businessId);
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
        return (
            <div className="reviews">
                <ul>
                    {this.props.reviews.reverse().map(review => (<UserReviewsItem review={review} 
                                                                    key={review.id} 
                                                                    removeReview={this.props.removeReview}
                                                                    businessId={review.business_id}/>))}
                </ul>
            </div>
        )
    }
}
export default UserReviewsIndex;