import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import UpdateUserPassword from "./update_user"

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
    };
};

const mDTP = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        updateUser: (userId, user) => dispatch(updateUser(userId, user))
    };
};

export default connect(mSTP, mDTP)(UpdateUserPassword);
