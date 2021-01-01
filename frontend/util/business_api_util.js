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

// SEARCH BAR HAS 2 INPUTS: ONE FOR LOCATION AND ONE NON-SPECIFIC

// NON-SPECIFIC  (LEFT INPUT)
export const getSearchBusinesses = (query) => {
    return $.ajax({
        method: "GET",
        url: "/api/businesses/search",
        data: {query: query}
    })
}

