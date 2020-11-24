import React from "react";
// import HeaderContainer from '../header_container'
import ReviewsHeader from '../reviews/reviews_header'


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            rating: 0,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let review = Object.assign({}, this.state)
        review.business_id = this.props.businessId
        this.props.createReview(this.props.businessId, review)
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        )
    }


    starRating(){
        const updateRating = (ratingValue) => {
            this.setState({ rating: ratingValue })
        }
        return (
            <div className="star-rating">
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label key={i}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => updateRating(ratingValue)} />
                            {/* <div> */}
                            <i className="fas fa-star"
                                id={ratingValue <= (this.state.rating) ? "checked" : "notChecked"}
                                // CSS ID
                                onMouseEnter={() => updateRating(ratingValue)}
                            />
                            {/* </div> */}
                        </label>
                    )
                })}
            </div>
        )
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    render() {
        return (
            <div>
                <ReviewsHeader />
                <div className="review-form-container">
                    <div className="review-errors">
                        {this.renderErrors()}
                    </div>
                    <form
                        className="review-form"
                        onSubmit={this.handleSubmit}>
                        <div className="rating-div">
                            <label>Rating: {this.starRating()}</label>
                        </div>
                        <div>
                            <label>Body:</label>
                            <textarea
                                type="text"
                                value={this.state.body}
                                onChange={this.handleInput("body")} />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default ReviewForm; 