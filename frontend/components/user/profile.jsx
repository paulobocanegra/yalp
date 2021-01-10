import React from 'react';
import { Link } from "react-router-dom"
import HeaderContainer from '../header_container'
// import ReviewIndexContainer from '../reviews/review_index_container'
import UserReviewContainer from '../reviews/user_reviews_container'

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser.id);
        this.props.fetchBusinesses();
        this.props.fetchUserReviews(this.props.currentUser.id)
        // debugger
            .then(() => {
                this.setState({ loading: false })
            })
    }

    render(){
        // debugger
        if (!this.props.currentUser || !this.props.reviews) {
            return <div></div>;
        }
        // if (this.state.loading) {
        //     return <div></div>
        // }
        return(
            <div>
                <div className="show-header">
                    <HeaderContainer/>
                </div>
                <div className="profile-container">
                    <div className="profile-content-container">
                        <div className="left-most-container">
                            <div className="profile-picture-user-show">
                            </div>
                        </div>
                        <div className="profile-user-info">
                            <div className="user-info-holder">
                                <h1 className="user-username">{this.props.currentUser.first_name}</h1>
                                <h3>{this.props.currentUser.zip_code}</h3>
                                <br/>
                                <div className="reviews-holder">  
                                    <i className="fas fa-star" />
                                    <div className="number-reviews">{Object.values(this.props.reviews).length} Reviews</div>
                                </div>

                            </div>
                        </div>
                        <div className="update-nav-bar user-actions">
                            {/* <div>
                                <p className="account-settings">{this.state.first_name}Settings </p>
                            </div> */}
                            <ul className="profile-list-holder">
                                <Link className="header-link-profile" to={`/users/${this.props.currentUser.id}/update`}>
                                    <li className="update-link" >Update Profile</li>
                                </Link>
                                <Link className="header-link-profile" to={`/users/${this.props.currentUser.id}/update-password`}>
                                    <li className="update-link" id="bottom-link">Change Password</li>
                                </Link>

                                {/* <li className="update-link" id="selected-link">
                                        <Link className="header-link-profile" to="">Profile</Link>
                                    </li>
                                    <li className="update-link" id="bottom-link">
                                        <Link className="header-link-profile" to="">Password</Link>
                                    </li> */}
                            </ul>
                        </div>
                        {/* <div className="user-actions">
                            <Link to={`/users/${this.props.currentUser.id}/update`}>Update Profile</Link>
                        </div> */}
                    </div>
                </div>
                <div className="profile-content">
                    <div className="under-profile-picture">
                    </div>
                    <div className="user-review-container">
                        {/* <div className="user-reviews"> */}
                        <UserReviewContainer className="user-reviews"/>
                            {/* <p>{this.props.reviews}</p> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;