export const fetchReviews = (businessId) => {
    return $.ajax({
        url: `/api/businesses/${businessId}/reviews`,
        method: `GET`,
    })
}

export const fetchReview = (reviewId) => {
    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: `GET`,
    })
}

export const createReview = (businessId, review) => {
    return $.ajax({
        url: `/api/businesses/${businessId}/reviews`,
        method: `POST`,
        data: {
            review: review,
            businessId: businessId
        }
    })
}

export const removeReview = (reviewId) => {
    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: `DELETE`,
    })
}

