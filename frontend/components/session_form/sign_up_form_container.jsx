import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navLink: <Link to="/login">Sign In</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signUp(user)),
    };
};

export default connect(mSTP, mDTP)(SessionForm);
