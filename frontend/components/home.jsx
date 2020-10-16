import React from "react"
import {Link} from "react-router-dom"

const HomeComponent = ({currentUser, signOut}) => {
    const display = currentUser ? (
        <div className="session_buttons">
            <button className="header-button" onClick={signOut}>Log out</button>
            </div>
    ) : (
        <div className="session_buttons">
            <Link to="/signin" className="header-link">Sign In</Link>
            <Link to="/signup">
                <button className="header-button">Sign Up</button>
            </Link>
        </div>
        )
    
    return (
        <div className="landing-main">
            <div className="main-top">
                <img src={window.logoURL} className="main-logo"/>
                {display}
            </div>
        </div>
        
        
    )
        
}

export default HomeComponent;