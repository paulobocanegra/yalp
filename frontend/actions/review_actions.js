import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveAllReviews = (reviews) => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
}

export const receiveReview = (payload) => {
    return {
        type: RECEIVE_REVIEW,
        payload
    }
}

export const removeReview = (payload) => {
    return {
        type: REMOVE_REVIEW,
        payload
    }
}

export const fetchReviews = () => (dispatch) => {
    return ReviewApiUtil.fetchReviews()
        .then(result => dispatch(receiveAllReviews(result)))
}

export const fetchReview = (reviewId) => (dispatch) => {
    return ReviewApiUtil.fetchReview(reviewId)
        .then(result => dispatch(receiveReview(result)))
}

export const createReview = (review) => dispatch => {
    return ReviewApiUtil.createReview(review)
    .then(review => (dispatch(receiveReview(review))
    ))
};

export const removeReview = (reviewId) => dispatch => {
    return ReviewApiUtil.removeReview(reviewId)
        .then(review => (dispatch(removeReview(review))
    ))
};

