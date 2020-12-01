import React from 'react';
import { Link } from "react-router-dom"
import HeaderContainer from '../header_container'

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser.id)
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
                        <div className="profile-picture">
                        </div>
                        <h1>{this.props.currentUser.first_name}'s Profile</h1>
                    </div>
                    <div className="profile-user-info">

                        <div>
                            <h1>{this.props.currentUser.first_name} {this.props.currentUser.last_name[0] + "."}</h1>
                            <h3>{this.props.currentUser.zip_code}</h3>
                        </div>
                    </div>
                    <div className="user-actions">
                        <Link to={`/users/${this.props.currentUser.id}/update`}>Update Profile</Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;