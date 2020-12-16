import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import Header from './header';

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

export default connect(mSTP, mDTP)(Header);
