import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
                    <h3 class="top-message">Log in to Yalp</h3>
                    <h4 className="top-session-input-register">New to Yalp? {this.props.navLink}</h4>
                    {/* {this.renderErrors()} */}
                    <div>
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
                        <p className="session-input-register">New to Yalp? {this.props.navLink}</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
