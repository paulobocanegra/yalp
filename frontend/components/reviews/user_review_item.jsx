import React from 'react'
import {Link} from 'react-router-dom'

class UserReviewsItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        this.props.fetchUserReviews(this.props.currentUser.id)
        this.props.fetchBusiness(this.props.businessId)
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeReview(this.props.review.id)
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
        if (!this.props.review.business || !this.props.currentUser){
            return <div></div>
        }
        return (
            <li>
                <div className="user-reviews-items">
                    <div className="business-photo-info-holder">
                        {/* </div> */}
                            <img className="user-reviews-business-img" src={this.props.review.business_photo[0]}/>
                        <div className="review-business-detail">
                            <Link className="business-name-link" to={`/businesses/${this.props.review.business.id}`}>
                                <h3 className="review-business-name"> {this.props.review.business.name}</h3>
                            </Link>
                            {/* <h3 className="review-username">{state.entities.businesses[this.props.key].name}</h3> */}
                            <p>Business Adress</p>
                            <p>City, CA</p>
                        </div>
                    </div>
                    <div className="user-reviews-content">
                        <div>
                            {/* <img className="rating-img" id="review-rating" src={window.rating4} /> */}
                            {this.currentStars()}
                        </div>
                        <div className="review-body">
                            {this.props.review.body}
                        </div>
                    </div>
                    <div className="delete-review">
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default UserReviewsItem;
