import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/reviews_actions'

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.errors;
        case RECEIVE_REVIEW:
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;