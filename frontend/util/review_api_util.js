export const fetchReviews = () => {
    return $.ajax({
        url: `/api/reviews`,
        method: `GET`,
    })
}

export const fetchReview = (reviewId) => {
    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: `GET`,
    })
}

export const createReview = (review) => {
    return $.ajax({
        url: `/api/reviews/`,
        method: `POST`,
        data: {review}
    })
}

