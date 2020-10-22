import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/reviews_actions'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            newState = action.reviews;
            return newState;
        case RECEIVE_REVIEW:
            newState[action.payload.review.id] = action.payload.review
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;