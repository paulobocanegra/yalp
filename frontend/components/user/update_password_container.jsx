import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import UpdateUserPassword from "./update_password"

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUser.id]
    };
};

const mDTP = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        updateUser: (userId, user) => dispatch(updateUser(userId, user))
    };
};

export default connect(mSTP, mDTP)(UpdateUserPassword);
