import React from 'react';
import {Link} from 'react-router-dom'
import SessionHeader from './header_bar'
// import signup_illustration from '../../../app/assets/images/signup_illustration'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name:'',
            email: '',
            password: '',
            zip_code: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);4
        this.props.processForm(user);
    }


    renderErrors() {

        return (
            <ul className="errors-message"> 
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <div>
                    <SessionHeader />
                </div>
                <div className="session-container">
                    <div className="session-container-child">
                        <form className="session-form" onSubmit={this.handleSubmit}>
                            <h3 className="top-message">Sign Up for Yalp</h3>
                            <h4 className="top-session-input-register">Already on Yalp? <Link to="/signin">Sign In</Link></h4>
                            {this.renderErrors()}
                            <div className="form-div">
                                <div className="full-name">
                                    <input className="input-field-name" type="text"
                                        value={this.state.first_name}
                                        onChange={this.update('first_name')}
                                        placeholder="First Name" />
                                    <br />
                                    <input className="input-field-name" type="text"
                                        value={this.state.last_name}
                                        onChange={this.update('last_name')}
                                        placeholder="Last Name" />
                                </div>
                                <br />
                                <input className="input-field" type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email" />
                                <br />
                                <input type="password"
                                    className="input-field"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                                <br />
                                <input className="input-field" type="text"
                                    value={this.state.zip_code}
                                    onChange={this.update('zip_code')}
                                    placeholder="Zip Code" />
                                <br />
                                <button className="sign-in-button">{this.props.formType}</button>
                                <p className="session-input-register">Already on Yalp? <Link to="/signin">Sign In</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="session-container-child" id="session-picture">
                        <img src={window.brentURL} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpForm;
