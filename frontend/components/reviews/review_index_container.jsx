import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'
import ReviewIndex from './review_index';


const mSTP = (state) => {
    return {
        // authorId: state.session.id,
        reviews: Object.values(state.entities.reviews),
        // errors: state.errors.reviewsErrors,
        // businessId: ownProps.match.params.businessId   
        // businessId: state.entities.businesses[0]
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        createReview: (businessId, review) => dispatch(createReview(businessId, review)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(ReviewIndex);