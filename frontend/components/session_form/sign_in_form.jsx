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
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        this.props.clearErrors();
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            password: ""
        })
    }

    demoLogin(e) {
        e.preventDefault();
        // this.props.clearErrors();
        let login = this.props.login ? this.props.login : this.props.processForm;
        let that = this;
        let count = 0;
        let demo = 'testuser@yalp.compassword';
        if (this.demo) return;
        this.setState({
            email: '',
            password: ''
        });
        this.demo = setInterval(() => {
            let type = count < 17 ?'email' : 'password';
            that.setState({ [type]: that.state[type] + demo[count] });
            count++;
            if (count === 25) {
                clearInterval(this.demo)
                login({
                    email: 'testuser@yalp.com',
                    password: 'password'
                })
            }
        }, 50)
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
                    <div className="errors-message">
                        {this.renderErrors()}
                    </div>    
                </div>
                <div className="session-container">
                    <div className="session-container-left">
                        <form className="session-form" onSubmit={this.handleSubmit}>
                            <h3 className="top-message">Log in to Yalp</h3>
                            <h4 className="top-session-input-register">New to Yalp? <Link to="/signup">Sign Up</Link></h4>
                            <div className="form-div"> 
                                <input className="input-field" type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email"/>
                                <input type="password"
                                    className="input-field"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    />
                                <button className="sign-in-button">{this.props.formType}</button>
                                <button onClick={this.demoLogin} className="sign-in-button">Sign In as Demo User</button>
                                <p className="session-input-register-bottom">New to Yalp? <Link to="/signup">Sign Up</Link></p>
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

export default SignInForm;
