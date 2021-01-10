
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

    componentDidMount() {
        this.props.fetchUserReviews(this.props.currentUser.id);
    }

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
        if(!this.props.reviews || !this.props.currentUser){
            return <div></div>
        }
        return (
            <div className="reviews">
                <ul>
                    <h1 className="reviews-top">Reviews</h1>
                    {this.props.reviews.reverse().map(review => (<UserReviewsItem review={review}
                                                                    removeReview={this.props.removeReview}
                                                                    fetchUserReviews = {this.props.fetchUserReviews}
                                                                    fetchBusiness={this.props.fetchBusiness}
                                                                    businessId={review.business_id}
                                                                    currentUser={this.props.currentUser}
                                                                    key={review.id} />))}
                </ul>
            </div>
        )
    }
}
export default UserReviewsIndex;