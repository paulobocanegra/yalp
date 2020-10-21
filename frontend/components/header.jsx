import React from 'react'
import SearchBar from './search_bar'
import { Link } from "react-router-dom"

const Header = ({ currentUser, signOut, businessId }) => {
        const display = currentUser ? (
            <div className="session_buttons-search">
                <button className="header-button-search" onClick={signOut}>Log out</button>
            </div>
        ) : (
                <div className="session_buttons-search">
                    <Link to="/" className="header-link-review"> Write a Review </Link>
                    <Link to={`/signin?id=${businessId}`}>
                        <button className="header-link-search">Log In</button> 
                    </Link>
                    <Link to="/signup">
                        <button className="header-button-search">Sign Up</button>
                    </Link>
                </div>
            );
            console.log(currentUser)
        return (
            <div className="header-container">
                <div className="header-container-child" id="logo-id">
                    <Link to="/" >
                        <img className="header-logo" src={window.logoURL} />
                    </Link>
                </div>
                <div className="header-search-bar header-container-child">
                    <SearchBar />
                </div>
                <div className="display-div header-container-child">
                    {display}
                </div>
            </div>
        )
}



export default Header;