import { connect } from 'react-redux';
import { createReview, removeErrors, removeReview } from '../../actions/review_actions'
import ReviewForm from './review_form';
import { fetchReview } from '../../actions/review.actions'

const mSTP = (state, ownProps) => {
    return {
        authorId: state.session.id,
        errors: state.errors.reviewErrors,
        businessId: ownProps.match.params.businessId
    }
};

const mDTP = (dispatch) => {
    return {
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        createReview: (businessId, review) => dispatch(createReview(businessId, review)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(ReviewForm);