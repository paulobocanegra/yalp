import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserReviews } from '../../actions/review_actions'
import { fetchBusinesses } from '../../actions/business_actions'
import Profile from "./profile"

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUser.id],
        reviews: Object.values(state.entities.reviews)
    };
};

const mDTP = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        // updateUser: (userId, user) => dispatch(updateUser(userId, user))
    };
};

export default connect(mSTP, mDTP)(Profile);
