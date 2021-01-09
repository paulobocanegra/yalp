import { connect } from 'react-redux';
import AvgRating from "./avg_rating"
import { fetchReviews } from "../../actions/review_actions"
const mSTP = (state, ownProps) => {
    // debugger
    if (state.entities.reviews[ownProps.businessId]){
        return ({
            reviews: Object.values(state.entities.reviews[ownProps.businessId]),
            businessId: ownProps.businessId,
        })
    } else {
        return {}
    }
}
const mDTP = dispatch => {
    return ({
        fetchReviews: businessId => dispatch(fetchReviews(businessId))
    })
}
export default connect(mSTP, mDTP)(AvgRating)