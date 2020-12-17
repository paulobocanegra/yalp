import React from 'react';
import { Link } from "react-router-dom"
import HeaderContainer from '../header_container'

class UpdateUserPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            email: this.props.currentUser.email,
            zip_code: this.props.currentUser.zip_code,
            old_password: "",
            new_password: "",
            new_password2: "",
            password: this.props.currentUser.password
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        if(this.new_password === this.new_password2 && this.old_password === this.password){
            this.props.updateUser(this.props.currentUser.id, user)
            this.props.history.push(`/users/${this.props.currentUser.id}`)
        } 
    }


    // renderErrors() {
    //     return (
    //         <ul className="errors-message">
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div>
                <div className="show-header">
                    <HeaderContainer />
                </div>
                {/* <div className="errors-message">
                    {this.renderErrors()}
                </div> */}

                <div className="update-profile-container">
                    {/* <div className=""> */}
                    <div className="update-nav-bar">
                        <div>
                            <p className="account-settings">{this.state.first_name}'s Account Settings </p>
                        </div>
                        <ul className="profile-list-holder">
                            <Link className="header-link-profile" to={`/users/${this.props.currentUser.id}/update`}>
                                <li className="update-link">Profile</li>
                            </Link>
                            <Link className="header-link-profile" to="">
                                <li className="update-link" id="bottom-link" id="selected-link">Password</li>
                            </Link>

                            {/* <li className="update-link" id="selected-link">
                                    <Link className="header-link-profile" to="">Profile</Link>
                                </li>
                                <li className="update-link" id="bottom-link">
                                    <Link className="header-link-profile" to="">Password</Link>
                                </li> */}
                        </ul>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="update-profile-form">
                            <h1 className="profile-title">Change Password</h1>

                            <hr />
                            <div className="form-div">
                                <label htmlFor="old-password" className="input-label"> Old Password</label>
                                <span className="required-span">This field is required</span>
                                <input id="old-password" className="input-field-update" type="password"
                                    value={this.state.password}
                                    onChange={this.update('old_password')}
                                    placeholder="" required />
                                <br />
                                <label htmlFor="edit-new-password" className="input-label"> New Password</label>
                                <span className="required-span">This field is required</span>
                                <input id="edit-new-password" className="input-field-update" type="password"
                                    value={this.state.new_password}
                                    onChange={this.update('new_password')}
                                    placeholder="" required />
                                <br />
                                <label htmlFor="edit-new-password2" className="input-label"> Confirm New Password</label>
                                <span className="required-span">This field is required</span>
                                <input id="edit-new-password2" className="input-field-update" type="password"
                                    value={this.state.new_password2}
                                    onChange={this.update('new_password2')}
                                    placeholder="" required />
                                <br />
                                
                                <div className="update-buttons">
                                    <button className="update-button">Save Changes</button>
                                    <Link className="update-cancel" to={`/users/${this.props.currentUser.id}`}>Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default UpdateUserPassword;