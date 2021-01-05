import { connect } from 'react-redux';
import SearchResult from './search_result'
import { fetchBusinesses } from '../../actions/business_actions';
import { fetchReviews } from '../../actions/review_actions';
import { getSearchBusinesses } from '../../actions/business_actions'

const mSTP = (state) => {
    return {
        businesses: Object.values(state.entities.businesses),
    }
};

const mDTP = (dispatch) => {
    return {
        // fetchBusinesses: () => dispatch(fetchBusinesses()),
        // fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        // fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        getSearchBusinesses: (query) => dispatch(getSearchBusinesses(query))

    }
};

export default connect(mSTP, mDTP)(SearchResult)