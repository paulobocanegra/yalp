import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined
    let store;
    if (window.currentUser){
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                currentUser: window.currentUser
            }
        }
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }

    window.store = store;
    window.getState = store.getState;
    ReactDOM.render(<Root store={store}/>, root);
});