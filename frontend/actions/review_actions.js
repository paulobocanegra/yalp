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

export const receiveErrors = errors => {
    return ({
        type: RECEIVE_REVIEW_ERRORS,
        errors
    })
}

export const fetchReviews = () => (dispatch) => {
    return ReviewApiUtil.fetchReviews()
        .then(
            result => dispatch(receiveAllReviews(result)),
            errors => dispatch(receiveErrors(errors.response.JSON))
            )
}

export const fetchReview = (reviewId) => (dispatch) => {
    return ReviewApiUtil.fetchReview(reviewId)
        .then(
            result => dispatch(receiveReview(result)),
            errors => dispatch(receiveErrors(errors.response.JSON))
            )
}

export const createReview = (review) => dispatch => {
    return ReviewApiUtil.createReview(review)
    .then(
        review => (dispatch(receiveReview(review),
        errors => dispatch(receiveErrors(errors.response.JSON))
        )
    ))
};

export const removeReview = (reviewId) => dispatch => {
    return ReviewApiUtil.removeReview(reviewId)
        .then(
            reviewId => (dispatch(removeReview(reviewId),
            errors => dispatch(receiveErrors(errors.response.JSON))
        )
    ))
};

