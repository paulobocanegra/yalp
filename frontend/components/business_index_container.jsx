import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../actions/business_actions'

const mSTP = (state) => {
    return {
        businesses: Object.values(state.businesses)
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses(businesses))
    }
}

export default connect(mSTP, mDTP)(BusinessIndex)