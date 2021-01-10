import { connect } from 'react-redux';
import Home from './home';
import { fetchUser } from '../actions/user_actions'
import { signOut } from '../actions/session_actions';

const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser,
        businesses: state.entities.businesses
    };
};

const mDTP = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    };
};

export default connect(mSTP, mDTP)(Home);
