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
            password: '',
            zip_code: this.props.currentUser.zip_code,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state); 4
        this.props.updateUser(this.props.currentUser.id, user);
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

              

                <div className="session-container">
                    <div className="session-container-left">
                        <form className="session-form" onSubmit={this.handleSubmit}>
                            <h1 className="top-message">Profile</h1>
                            
                            <h4 className="top-session-input-register">Your profile information</h4>
                            <div className="form-div">
                                <div className="full-name">
                                    <input className="input-field-fname" type="text"
                                        value={this.state.first_name}
                                        onChange={this.update('first_name')}
                                        placeholder="First Name" required />

                                    <input className="input-field-lname" type="text"
                                        value={this.state.last_name}
                                        onChange={this.update('last_name')}
                                        placeholder="Last Name" required />
                                </div>

                                <input className="input-field" type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email" required />

                                <input type="password"
                                    className="input-field"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    required />

                                <input className="input-field" type="text"
                                    value={this.state.zip_code}
                                    onChange={this.update('zip_code')}
                                    placeholder="Zip Code" required />
                                <button className="sign-in-button">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateUser;