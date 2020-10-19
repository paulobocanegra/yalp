import * as BusinessApiUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

export const receiveAllBusinesses = (businesses) => {
    // debugger
    return {
        type: RECEIVE_ALL_BUSINESSES,
        businesses
    }
}

export const receiveBusiness = (business) => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
}

export const fetchBusinesses = () => (dispatch) => {
    return BusinessApiUtil.fetchBusinesses()
        .then(result => dispatch(receiveAllBusinesses(result)))
}

export const fetchBusiness = (business) => (dispatch) => {
    return BusinessApiUtil.fetchBusiness(business)
        .then(result => dispatch(receiveBusiness(result)))
}
