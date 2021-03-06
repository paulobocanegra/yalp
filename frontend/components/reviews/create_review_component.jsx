import React from "react";
import HeaderContainer from '../header_container';
import { Link } from 'react-router-dom'


class CreateReviewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: {
                body: "",
                rating: 0,
            },
            loading: true,
        }; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    componentDidMount() {
        this.props.removeErrors();
        this.props.fetchBusiness(this.props.match.params.businessId)
        .then(() => {
            this.props.fetchReviews(this.props.match.params.businessId)
        })
        .then(() => {
            this.setState({ loading: false })
        })
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }
    
    
    //FORM FUNCTIONS
    handleSubmit(e) {
        
        e.preventDefault();
        let review = this.state
        review.business_id = this.props.businessId
        this.props.createReview(this.props.businessId, review)
        this.props.history.push(`/businesses/${this.props.businessId}`)
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    renderErrors() {
        return (
            <ul className="errors-message">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    starRating() {
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

    // componentWillUnmount() {
    //     this.props.removeErrors();
    // }
    // END OF FORM FUNCTIONS



    render() {
        if (this.state.loading) {
            return <div></div>
        }
        if (!this.props.currentBusiness) {
            return null;
        }
        return (
            <div>
                <div className="show-header">
                    <HeaderContainer businessId={this.props.currentBusiness.id}/>
                </div>
                <div className="create-review-holder">
                    <div className="business-name">
                        <Link to={`/businesses/${this.props.businessId}`} className="business-name-link" >{this.props.currentBusiness[this.props.businessId].name}</Link>
                    </div>
                    <div className="errors-message">
                        {this.renderErrors()}
                    </div>
                        <form
                            className="review-form"
                            onSubmit={this.handleSubmit}>
                        <div className="rating-score-holder">
                            <div className="select-rating">
                                {this.starRating()}
                            </div>
                            <div className="select-rating-title">Select your rating</div>
                        </div>
                        <div>
                            {/* <label>Body:</label> */}
                            <textarea
                                className="rating-body"
                                type="text"
                                value={this.state.body}
                                placeholder="This spot is serving meal kits, as well as offering delivery during COVID. I'm so happy! Of Course nothing beats the in person experience, but delivery is a great second option right now. The food was a little cold, but I understand this is a new operation for them..."
                                onChange={this.handleInput("body")} />
                        </div>
                        <button className="post-review-button">Post Review</button>
                    </form>

                </div>
            </div>
        )
    }
}
export default CreateReviewComponent; 