import { combineReducers } from 'redux';
import BusinessesReducer from './business_reducer';

const RootReducer = combineReducers({
    businesses: BusinessReducer
});

export default RootReducer;