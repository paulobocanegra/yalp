import React from "react"
import {Link} from "react-router-dom"
import BusinessIndex from './business_index'

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
                <Link to="/" className="main-logo">
                    <img src={window.logoURL} />
                </Link>
            </div>
                {display}
            <div>
                <BusinessIndex/>
            </div>
        </div>
        
        
    )
        
}

export default HomeComponent;