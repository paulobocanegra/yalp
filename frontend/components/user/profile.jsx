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
        // this.props.fetchUsers()
        this.props.fetchBusinesses()
        this.props.fetchUser(this.props.currentUser.id)
        this.props.fetchUserReviews(this.props.currentUser.id)
        // debugger
            .then(() => {
                this.setState({ loading: false })
            })
    }

    render(){
        // debugger
        if (this.state.loading) {
            return <div></div>
        }
        if (!this.props.currentUser) {
            return null;
        }
        return(
            <div>
                <div className="show-header">
                    <HeaderContainer/>
                </div>
                <div className="profile-container">
                    <div className="left-most-container">
                        <div className="profile-picture-user-show">
                        </div>
                    </div>
                    <div className="profile-user-info">
                        <div>
                            <h1 className="user-username">{this.props.currentUser.first_name}</h1>
                            <h3>{this.props.currentUser.zip_code}</h3>
                            <br/>
                            <div className="reviews-holder">  
                                <i className="fas fa-star" />
                                <div className="number-reviews">{Object.values(this.props.reviews).length} Reviews</div>
                            </div>

                        </div>
                    </div>
                    <div className="user-actions">
                        <Link to={`/users/${this.props.currentUser.id}/update`}>Update Profile</Link>
                    </div>
                </div>
                <div className="profile-content">
                    <div className="under-profile-picture">
                    </div>
                    <div className="user-review-container">
                        <h1>{this.props.currentUser.first_name}'s Profile</h1>
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