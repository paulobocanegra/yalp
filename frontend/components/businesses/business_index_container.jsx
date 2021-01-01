import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions';
import { fetchReviews } from '../../actions/review_actions';

const mSTP = (state) => {
    return {
        businesses: Object.values(state.entities.businesses),
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        // fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    }
};

export default connect(mSTP, mDTP)(BusinessIndex)