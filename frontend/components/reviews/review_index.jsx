import React from "react";
import ReviewItem from "./review_item"
import AvgRating from "./avg_rating_container";

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.averageRating = this.averageRating.bind(this)
        this.currentStars = this.currentStars.bind(this)
    }

    averageRating(){
        let ratingsArr = this.props.ratings;
        let sum = 0 
        for (let i = 0; i < ratingsArr.length ; i ++){
            sum += ratingsArr[i]
        }
        return sum / ratingsArr.length
    }

    currentStars() {
        return (
            <div className="starRating-current">
                {[...Array(5)].map((star, i) => {
                    return (
                        // <div>
                        <i className="fas fa-star"
                            key={i}
                            id={i + 1 <= this.averageRating().toFixed(2) ? "checked" : "notChecked"}>
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
                {/* <div>{this.currentStars()}</div> */}
                {/* <div className="average-rating">{this.currentStars()}</div> */}
                {/* <AvgRating businessId={this.props.currentBusiness.id}
                            reviews={this.props.reviews}/> */}
                <ul>
                    {this.props.reviews.reverse().map(review => (<ReviewItem   review={review}
                                                                    key={review.id}/>))}
                </ul>                                               
            </div>
        )
    }
}
export default ReviewIndex;