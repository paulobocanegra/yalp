import { connect } from 'react-redux';
import Home from './home';
import { signOut } from '../actions/session_actions';

const mSTP = (state) => {
    return {
        currentUserId: state.entities.users[state.session.currentUserId],
        businesses: state.entities.businesses
    };
};

const mDTP = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

export default connect(mSTP, mDTP)(Home);
