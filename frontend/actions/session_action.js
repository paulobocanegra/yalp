import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_POST";
export const REMOVE_USER = "REMOVE_POST";

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


export const signUp = (user) => (dispatch) => {
    return SessionApiUtil.signUp(user)
        .then((result) => dispatch(receiveUser(result)))
}

export const signIn = (user) => (dispatch) => {
    return SessionApiUtil.signIn(user)
        .then((result) => dispatch(receiveUser(result)))
}

export const signOut = (user) => (dispatch) => {
    return SessionApiUtil.signOut(user)
        .then((result) => dispatch(removeUser(result)))
}