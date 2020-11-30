import { connect } from 'react-redux';
import Profile from "./profile"

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
    };
};

const mDTP = dispatch => {
    return {
        updateUser: () => dispatch(updateUser(userId))
        // signOut: () => dispatch(signOut()),
    };
};

export default connect(mSTP, mDTP)(Profile);
