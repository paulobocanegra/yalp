// import React from 'react';
// import { Link } from 'react-router-dom'
// class ReviewsHeader extends React.Component {
//     render() {
//         return (
//             <div className="reviews-header">
//                 <Link to="/">
//                     <img className="logo" src={window.logoURL} />
//                 </Link>
//             </div>
//         )
//     }
// }

// export default ReviewsHeader;


import React from 'react'
// import SearchBar from './search_bar'
import { Link } from "react-router-dom"

const ReviewsHeader = ({ currentUser, signOut, businessId }) => {
    const display = currentUser ? (
        <div className="session_buttons-search">
            <div className="log-out">
                <p className="header-link-write-review"> Write a Review </p>
                <button className="header-button-search" onClick={signOut}>Log out</button>
            </div>
            <div className="profile-picture-1">
            </div>
        </div>
    ) : (
            <div className="session_buttons-search">
                <p className="header-link-write-review"> Write a Review </p>
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
        <div className="reviews-header">
            <div className="header-container-child" id="logo-id">
                <Link to="/" >
                    <img className="header-logo" src={window.logoURL} />
                </Link>
            </div>
            <div className="display-div header-container-child">
                {display}
            </div>
        </div>
    )
}



export default ReviewsHeader;