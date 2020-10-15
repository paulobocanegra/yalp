import React from 'react';
import {Link } from 'react-router-dom'
import SessionHeader from './header_bar'

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            password: ""
        })
    }

    demoLogin(e){
        e.preventDefault();
        // this.props.clearErrors()
    }

    
    renderErrors() {
        return (
            <ul>
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
                            <h3 className="top-message">Log in to Yalp</h3>
                            <h4 className="top-session-input-register">New to Yalp? <Link to="/signup">Sign Up</Link></h4>
                            {this.renderErrors()}
                            <div className="form-div"> 
                                <input className="input-field" type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email"/>
                                <br/>
                                <input type="password"
                                    className="input-field"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    />
                                <br/>
                                <button className="sign-in-button">{this.props.formType}</button>
                                <p className="session-input-register">New to Yalp? <Link to="/signup">Sign Up</Link></p>
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

export default SignInForm;
