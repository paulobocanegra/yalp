import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
        navLink: <Link to="/signup">Sign Up</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signIn(user)),
    };
};

export default connect(mSTP, mDTP)(SessionForm);
