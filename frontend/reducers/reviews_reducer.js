import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, RETURN_SINGLE_REVIEW, RECEIVE_USER_REVIEWS } from '../actions/review_actions'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            newState = action.reviews;
            return newState;
        case RECEIVE_USER_REVIEWS:
            newState = action.reviews;
            return newState;
        case RECEIVE_REVIEW:
            return Object.assign(newState, action.payload.reviews);
        case RETURN_SINGLE_REVIEW:
            return action.review
        default:
            return state;
    }
} 

export default reviewsReducer;