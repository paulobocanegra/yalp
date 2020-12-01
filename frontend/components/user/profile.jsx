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
                <div className="profile-picture">
                </div>
                <div>Hello {this.props.currentUser.first_name}</div>
                <div>Hello {this.props.currentUser.last_name}</div>
            </div>
        )
    }

}

export default Profile;