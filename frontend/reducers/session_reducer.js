import { RECEIVE_USER, REMOVE_USER } from '../actions/session_action'


const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return { id: action.user.id };
        case REMOVE_USER:
            return state;
        default:
            return state;
    }
};

export default sessionReducer;