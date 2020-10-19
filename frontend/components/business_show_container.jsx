import { connect } from 'react-redux';
import BusinessShowComponent from './business_show';
import { fetchBusiness} from '../actions/business_actions'

const mSTP = (state, ownProps) => {
    return {
        currentBusiness: state.businesses[ownProps.match.params.businessId]
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (business) => dispatch(fetchBusiness(business))
    }
}

export default connect(mSTP, mDTP)(BusinessShowComponent)