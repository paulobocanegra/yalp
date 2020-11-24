import React from "react";
// import AverageRating from "./average_rating";
class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id)
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
        return (
            <div className="review-index-div">
                {/* <div className="rating-avg-rev"> */}
                {/* <div className="stars-rev">★★★★★</div> */}
                <div className="stars-icon-div">{this.currentStars()}</div>
                {/* <div className="stars-rev"><AverageRating/></div> */}
                {/* </div> */}
                <div className="user-name">
                    <div className="reviewing-user">{this.props.review.user}</div>
                </div>
                <div className="body-cont">
                    <div>{this.props.review.body}</div>
                </div>
                {/* {this.props.userId === this.props.review.userId ? <button className="review-button2" onClick={this.handleDelete}>Delete</button> : null} */}
            </div>
        )
    }
}
export default ReviewIndex;