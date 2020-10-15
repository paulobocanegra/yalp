import React from "react"
import {Link} from "react-router-dom"

const HomeComponent = ({currentUser, signOut}) => {
    const display = currentUser ? (
        <div className="session_buttons">
                <p>{currentUser.first_name}</p> 
                <button onClick={signOut}>Log out</button>
            </div>
    ) : (
            <div className="session_buttons">
            <Link to="/signin" className="header-button">Sign In</Link>
            <Link to="/signup">
                <button className="header-button">Sign Up</button>
            </Link>
        </div>
        )
    
    return (
        <div className="landing-main">
            <h1>Yalp</h1>
            {display}
        </div>
    )
        
}

export default HomeComponent;