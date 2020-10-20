import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness} from '../../actions/business_actions'

const mSTP = (state, ownProps) => {
    return {
        currentBusiness: state.entities.businesses[ownProps.match.params.businessId],
        businessId: ownProps.match.params.businessId
    }
};

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
    }
};

export default connect(mSTP, mDTP)(BusinessShow);