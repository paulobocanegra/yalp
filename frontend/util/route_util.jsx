import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, location }) => {
    debugger
    const queryStringArray = location.search.split("=");
    const id = queryStringArray[queryStringArray.length - 1];
    const route = id ? `/businesses/${id}` : `/`;
    debugger
    return (
        <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to={route} />
            )
    )} />
    )
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/signin" />
            )
    )} />
);


const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.currentUserId) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));