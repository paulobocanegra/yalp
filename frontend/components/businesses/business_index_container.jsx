import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses, fetchBusiness, getSearchBusinesses } from '../../actions/business_actions';
import { fetchReviews } from '../../actions/review_actions';
import { withRouter } from "react-router-dom";

const mSTP = (state) => {
    return {
        businesses: Object.values(state.entities.businesses),
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        getSearchBusinesses: (query) => dispatch(getSearchBusinesses(query))
    }
};

export default withRouter(connect(mSTP, mDTP)(BusinessIndex))