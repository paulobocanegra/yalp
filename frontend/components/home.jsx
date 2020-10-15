import React from "react"
import {Link} from "react-router-dom"

const HomeComponent = ({currentUser, signOut}) => {
    const display = currentUser ? (
            <div>
                <h1>HOME TEST</h1>
                    <p>hello {currentUser.first_name}</p> 
                <button onClick={signOut}>Log out</button>.
            </div>
    ) : (
        <>
            <Link to="/signup">
                <button className="header-button">Sign Up</button>
            </Link>
            <Link to="/signin">
                <button className="header-button">Sign In</button>
            </Link>
        </>
        )
    
    return (
        <div>
            <h1>Yalp</h1>
            {display}
        </div>
    )
        
}

export default HomeComponent;