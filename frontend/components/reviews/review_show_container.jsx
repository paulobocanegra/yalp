import { connect } from 'react-redux';
import ReviewShow from './review_show';
import { fetchReview } from '../../actions/review.actions'

const mSTP = (state, ownProps) => {
    return {
        currentReview: state.entities.reviews[ownProps.match.params.reviewId],
        businessId: ownProps.match.params.businessId
    }
};

const mDTP = (dispatch) => {
    return {
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
    }
};

export default connect(mSTP, mDTP)(ReviewShow);