import { connect } from 'react-redux';
import AvgRating from "./avg_rating"
import { fetchReviews } from "../../actions/review_actions"
const mSTP = (state, ownProps) => {
    return ({
        reviews: Object.values(state.entities.reviews),
        businessId: ownProps.businessId,
    })
}
const mDTP = dispatch => {
    return ({
        fetchReviews: businessId => dispatch(fetchReviews(businessId))
    })
}
export default connect(mSTP, mDTP)(AvgRating)