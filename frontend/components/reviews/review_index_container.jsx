import { connect } from 'react-redux';
import { fetchReviews, fetchUserReviews } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'
import ReviewIndex from './review_index';


const mSTP = (state, ownProps) => {
    return {
        // authorId: state.session.id,
        reviews: Object.values(state.entities.reviews),
        ratings: Object.values(state.entities.reviews).map(review => (review.rating)),
        currentBusiness: ownProps.currentBusiness
        // errors: state.errors.reviewsErrors,
        // businessId: ownProps.match.params.businessId   
        // businessId: state.entities.businesses[0]
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