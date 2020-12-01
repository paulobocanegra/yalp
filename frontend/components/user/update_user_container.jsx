import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { fetchReviews } from '../../actions/review_actions'
// import UpdateUser from "./update_user"

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
    };
};

const mDTP = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        // fetchReviews: 
        updateUser: (userId, user) => dispatch(updateUser(userId, user))
        // signOut: () => dispatch(signOut()),
    };
};

export default connect(mSTP, mDTP)(UpdateUser);
