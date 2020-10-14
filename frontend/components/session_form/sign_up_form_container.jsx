import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navLink: "/login",
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signUp(user)),
    };
};

export default connect(mSTP, mDTP)(SignUpForm);
