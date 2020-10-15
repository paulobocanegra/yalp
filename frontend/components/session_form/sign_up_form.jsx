import React from 'react';
import {Link} from 'react-router-dom'

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
            <div className="sign-in-container">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h3 className="top-message">Sign Up for Yalp</h3>
                    <h4 className="top-session-input-register">Already on Yalp? <Link to="/signin">Sign In</Link></h4>
                    {this.renderErrors()}
                    <div>
                        <input className="input-field-name" type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            placeholder="First Name" />
                        <br />
                        <input className="input-field-name" type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            placeholder="Last Name" />
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
        );
    }
}

export default SignUpForm;
