import { connect } from 'react-redux';
// import { fetchReviews, fetchUserReviews } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'
import { fetchUserReviews, removeReview } from '../../actions/review_actions'
import UserReviewsIndex from './user_reviews_index';


const mSTP = (state) => {
    return {
        reviews: Object.values(state.entities.reviews),
        // business: state.entities.business[state.]
        // errors: state.errors.reviewsErrors,
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        // fetchBusinesses: () => dispatch(fetchBusiness()),
        fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
        // fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        // createReview: (businessId, review) => dispatch(createReview(businessId, review)),
        removeReview: (reviewId) => dispatch(removeReview(reviewId)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(UserReviewsIndex);