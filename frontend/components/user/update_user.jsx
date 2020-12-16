import React from 'react';
import { Link } from "react-router-dom"
import HeaderContainer from '../header_container'

class UpdateUser extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            email: this.props.currentUser.email,
            zip_code: this.props.currentUser.zip_code,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser.id)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state); 
        this.props.updateUser(this.props.currentUser.id, user)
        this.props.history.push(`/users/${this.props.currentUser.id}`)
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
                    <HeaderContainer/>
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
                                <Link className="header-link-profile" to="">
                                    <li className="update-link" id="selected-link">Profile</li>
                                </Link>
                                <Link className="header-link-profile" to="">
                                    <li className="update-link" id="bottom-link">Password</li>
                                </Link>

                                {/* <li className="update-link" id="selected-link">
                                    <Link className="header-link-profile" to="">Profile</Link>
                                </li>
                                <li className="update-link" id="bottom-link">
                                    <Link className="header-link-profile" to="">Password</Link>
                                </li> */}
                            </ul>
                        </div>
                        <form  onSubmit={this.handleSubmit}>
                            <div className="update-profile-form">
                                <h1 className="profile-title">Profile</h1>
                                
                                <hr/>
                                <div className="form-div">
                                    <label htmlFor="edit-first-name" className="input-label"> First Name</label>
                                    <span className="required-span">This field is required</span>
                                            <input id="edit-first-name" className="input-field-update" type="text"
                                                value={this.state.first_name}
                                                onChange={this.update('first_name')}
                                                placeholder="First Name" required />
                                    <br/>
                                <label htmlFor="edit-last-name" className="input-label"> Last Name</label>
                                    <span className="required-span">This field is required</span>
                                        <input id="edit-last-name" className="input-field-update" type="text"
                                            value={this.state.last_name}
                                            onChange={this.update('last_name')}
                                            placeholder="Last Name" required />
                                    <br/>

                                <label htmlFor="edit-email" className="input-label"> Email </label>
                                    <span className="required-span">This field is required</span>
                                    <input id="edit-email" className="input-field-update" type="text"
                                            value={this.state.email}
                                            onChange={this.update('email')}
                                            placeholder="Email" required />

                                        {/* <input type="password"
                                            className="input-field-update"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                            placeholder="Password"
                                            required /> */}
                                    <br/>

                                <label htmlFor="edit-zip" className="input-label"> Zip Code </label>
                                    <span className="required-span">This field is required</span>
                                    <input id="edit-zip" className="input-field-update" type="text"
                                        value={this.state.zip_code}
                                        onChange={this.update('zip_code')}
                                        placeholder="Zip Code" required />
                                    <br/>
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

export default UpdateUser;