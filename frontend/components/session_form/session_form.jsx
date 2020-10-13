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
                    Welcome to Yalp!
                    {/* {this.renderErrors()} */}
                    <div>
                        <label className="session-input-label">Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            />
                        </label>
                        <label className="session-input-label">Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                            <p className="session-input-register">New to yalp? {this.props.navLink}</p>
                        </label>
                        <button className={"button"}>{this.props.formType}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
