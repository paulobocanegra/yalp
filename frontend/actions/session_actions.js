import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    }
}

export const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const signUp = (user) => (dispatch) => {
    return SessionApiUtil.signUp(user)
        .then((result) => dispatch(receiveUser(result)),
            (error) => (dispatch(receiveErrors(error.responseJSON))
            ))
}

export const signIn = (user) => (dispatch) => {
    return SessionApiUtil.signIn(user)
        .then(
            (user) => dispatch(receiveUser(user)),
            (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
            )
};

export const signOut = () => (dispatch) => {
    return SessionApiUtil.signOut()
        .then((user) => dispatch(removeUser()))
}