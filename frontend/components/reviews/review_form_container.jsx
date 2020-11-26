import { connect } from 'react-redux';
import { fetchReview, createReview, removeErrors } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'
import ReviewForm from './review_form';

const mSTP = (state) => {
    return {
        authorId: state.session.id,
        errors: state.errors.reviewsErrors,
        businessId: Object.keys(state.entities.businesses)[0],
        // businessId: ownProps.match.params.businessId   
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        createReview: (businessId, review) => dispatch(createReview(businessId, review)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(ReviewForm);