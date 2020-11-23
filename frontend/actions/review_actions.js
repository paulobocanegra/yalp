import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
// export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RETURN_SINGLE_REVIEW = "RETURN_SINGLE_REVIEW";


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

// export const deleteReview = (reviewId) => {
//     return {
//         type: REMOVE_REVIEW,
//         reviewId
//     }
// }

export const receiveErrors = errors => {
    return ({
        type: RECEIVE_REVIEW_ERRORS,
        errors
    })
}

export const removeErrors = () => {
    return ({
        type: REMOVE_ERRORS,
    })
}


export const returnSingleReview = review => {
    return ({
        type: RETURN_SINGLE_REVIEW,
        review
    })
}

export const fetchReviews = (businessId) => (dispatch) => {
    return ReviewApiUtil.fetchReviews(businessId)
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

export const createReview = (businessId, review) => dispatch => {
    return ReviewApiUtil.createReview(businessId, review)
    .then(
        review => (dispatch(receiveReview(review),
        errors => dispatch(receiveErrors(errors.response.JSON))
        )
    ))
};

// export const removeReview = (reviewId) => dispatch => {
//     return ReviewApiUtil.removeReview(reviewId)
//         .then(
//             () => (dispatch(removeReview(reviewId),
//             errors => dispatch(receiveErrors(errors.response.JSON))
//         )
//     ))
// };

