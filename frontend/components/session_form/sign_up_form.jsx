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
        const user = Object.assign({}, this.state);
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
                    <div className="errors-message">
                        {this.renderErrors()}
                    </div> 
                <div className="session-container">
                    <div className="session-container-left">
                        <form className="session-form" onSubmit={this.handleSubmit}>
                            <h3 className="top-message">Sign Up for Yalp</h3>
                            <h4 className="top-session-input-register">Already on Yalp? <Link to="/signin">Sign In</Link></h4>
                            <div className="form-div">
                                <div className="full-name">
                                    <input className="input-field-fname" type="text"
                                        value={this.state.first_name}
                                        onChange={this.update('first_name')}
                                        placeholder="First Name" required/>
                          
                                    <input className="input-field-lname" type="text"
                                        value={this.state.last_name}
                                        onChange={this.update('last_name')}
                                        placeholder="Last Name" required/>
                                </div>
                      
                                <input className="input-field" type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email" required/>
                      
                                <input type="password"
                                    className="input-field"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    required/>
                      
                                <input className="input-field" type="text"
                                    value={this.state.zip_code}
                                    onChange={this.update('zip_code')}
                                    placeholder="Zip Code" required/>
                      
                                <button className="sign-in-button">{this.props.formType}</button>
                                <p className="session-input-register-bottom">Already on Yalp? <Link to="/signin">Sign In</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="session-container-right" id="session-picture">
                        <img src={window.brentURL} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpForm;
