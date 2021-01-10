import React from "react"
import {Link} from "react-router-dom"
import BusinessIndexContainer from '../components/businesses/business_index_container'
import SearchBarContainer from "./search/search_bar_container"

const Home = ({currentUser, signOut}) => {
    const display = currentUser ? (
        <div className="session-buttons">
            <button className="header-button" onClick={signOut}>Log out</button>
            <Link to={`/users/${currentUser.id}`} className="user-profile-link">
                <div className="profile-picture">
                </div>
            </Link>
        </div>
    ) : (
        <div className="session-buttons">
            <Link to="/signin" className="header-link">Log In</Link>
            <Link to="/signup">
                <button className="header-button">Sign Up</button>
            </Link>
        </div>
        )
    
    return (
        <div className="landing-main">
            <div className="main-top">
                <Link to="/" className="main-logo">
                    <img src={window.logoURL} />
                </Link>
                <div className="index-search-bar">
                    <SearchBarContainer/>
                </div>
            </div>
                {display}
            <div className="business-index-container">
                <BusinessIndexContainer />
            </div>
        </div>
        
        
    )
        
}

export default Home;