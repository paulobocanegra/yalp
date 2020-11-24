import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import ReviewsHeader from './reviews_header';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
    };
};

const mDTP = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

export default connect(mSTP, mDTP)(ReviewsHeader);
