import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import { signIn } from '../../actions/session_actions';
import SignInForm from './sign_in_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
        navLink: '/signup',
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signIn(user)),
    };
};

export default connect(mSTP, mDTP)(SignInForm);
