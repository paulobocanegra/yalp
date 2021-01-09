import { connect } from 'react-redux';
import { fetchReviews, fetchUserReviews } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'
import ReviewIndex from './review_index';


const mSTP = (state, ownProps) => {
    // debugger
    if (state.entities.reviews[ownProps.currentBusiness.id]) {
        return {
            // authorId: state.session.id,
            reviews: Object.values(state.entities.reviews[ownProps.currentBusiness.id]),
            ratings: Object.values(state.entities.reviews).map(review => (review.rating)),
            currentBusiness: ownProps.currentBusiness,
            // errors: state.errors.reviewsErrors,
            businessId: ownProps.currentBusiness.id  
        }
    } else {
        return {}
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        // fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        createReview: (businessId, review) => dispatch(createReview(businessId, review)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(ReviewIndex);