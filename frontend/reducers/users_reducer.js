import { RECEIVE_CURRENT_USER } from '../actions/user_actions';
import { RECEIVE_USER_REVIEWS } from '../actions/review_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // newState[currentUser] = action.user
            // return newState
            return Object.assign({}, state, { [action.user.id]: action.user });
        default:
            return state;
    }
};

export default usersReducer;