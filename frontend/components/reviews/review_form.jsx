import React from "react";
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

    componentWillUnmount() {
        this.props.clearReviewErrors();
    }

    render() {
        return (
            <div className="review-form">
                <div className="review-errors">
                    {this.renderErrors()}
                </div>
                <form
                    className="review-form"
                    onSubmit={this.handleSubmit}>
                    <div className="rating-div">
                        <label>Rating: 4</label>
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
        )
    }
}
export default ReviewForm; 