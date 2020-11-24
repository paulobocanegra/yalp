import { connect } from 'react-redux';
import AvgRating from "./avg_rating"
import { fetchReviews } from "../../actions/review_actions"
const mSTP = (state, ownProps) => {
    return ({
        reviews: ownProps.reviews,
        businessId: ownProps.businessId,
    })
}
const mDTP = dispatch => {
    return ({
        fetchReviews: businessId => dispatch(fetchReviews(businessId))
    })
}
export default connect(mSTP, mDTP)(AvgRating)