import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const removeUser = (user) => {
    return {
        type: REMOVE_USER,
        user
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
        .then((result) => dispatch(receiveUser(result)))
}

export const signIn = (user) => (dispatch) => {
    return SessionApiUtil.signIn(user)
        .then(
            (result) => dispatch(receiveUser(result)),
            (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
            )
};

export const signOut = (user) => (dispatch) => {
    return SessionApiUtil.signOut(user)
        .then((result) => dispatch(removeUser(result)))
}