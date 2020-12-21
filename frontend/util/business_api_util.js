export const fetchBusinesses = () => {
    return $.ajax({
        url: `/api/businesses`,
        method: `GET`,
    })
}

export const fetchBusiness = (businessId) => {
    return $.ajax({
        url: `/api/businesses/${businessId}`,
        method: `GET`,
    })
}

export const getSearchBusinesses = (query) => {
    return $.ajax({
        method: "GET",
        url: "/api/businesses/search",
        data: {query: query}
    })
}