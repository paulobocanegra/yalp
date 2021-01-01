import { connect } from 'react-redux';
import { createReview, fetchReview, fetchReviews } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'
import CreateReview from './create_review_component';

const mSTP = (state, ownProps) => {
    return {
        authorId: state.session.currentUser,
        // errors: state.errors.reviewsErrors,
        businessId: ownProps.match.params.businessId,
        currentBusiness: state.entities.businesses
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        createReview: (businessId, review) => dispatch(createReview(businessId, review)),
        // removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(CreateReview);