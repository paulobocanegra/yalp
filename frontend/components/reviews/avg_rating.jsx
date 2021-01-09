import React from 'react';
class AvgRating extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.businessId)
    }

    reviewCount() {
        return this.props.reviews.length
    }
    starFillPercentage() {
        const allReviews = this.props.reviews
        if(!allReviews){
            return null
        }
        const reviewCount = allReviews.length
        const ratings = this.props.reviews.map(review => review.rating)
        const ratingSum = Object.values(ratings).reduce((sum, key) => sum + key)
        const ratingAvg = (ratingSum / reviewCount)
        const starRounded = Math.round((ratingAvg / 5) * 100)
        const starPercentageRounded = Math.round(starRounded / 10) * 10
        return starPercentageRounded
    }
    render() {
        if (!this.props.reviews){
            return null;
        }
        return (
            <div className="rating-avg">
                <div className="stars-outer">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <div className="stars-inner"
                        style={{ width: `${this.starFillPercentage()}%` }}
                    >
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                <div className='review-total'>
                    ({this.reviewCount()})
                </div>
            </div>
        )
    }
}
export default AvgRating;