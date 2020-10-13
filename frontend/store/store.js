import {createStore, applyMiddleWate} from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"


const configureStore = (preloadedState = {}) => {
    return createStore(RootReducer, preloadedState, applyMiddleWate(thunk))
}

export default configureStore;