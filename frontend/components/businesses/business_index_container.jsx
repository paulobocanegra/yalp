import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';

const mSTP = (state) => {
    return {
        businesses: Object.values(state.entities.businesses),
        // currentUserId: state.session.currentUserId
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses())

    }
};

export default connect(mSTP, mDTP)(BusinessIndex)