import React from 'react';
import './Login-Page.css';
import axios from 'axios';
import Nav from './Navbar';

export default class LoginPage extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onEmailChange(event)
    {
        this.setState({
            email: event.target.value
        });
    }

    onPasswordChange(event)
    {
        this.setState({
            password: event.target.value
        });
    }

    onSubmit(event)
    {
        event.preventDefault();

        // make call to backend
        axios.post('http://localhost:5000/user/login', this.state)
            .then(res => {
                console.log(res);
                if(res.data.resultCode === 0)
                {
                    alert("Signed in successfully");
                    this.setState({
                        email: "",
                        password: ""
                    });
                }
                else
                {
                    alert("Not able to sign in");
                    this.setState({
                        password: ""
                    });
                }
            });

        
    }

    render()
    {
        return <div id="login-page-div">
            <Nav type="signup"/>
            <div id="login-page">
                <h1>Welcome back!</h1>
                <form id="login-form" onSubmit={this.onSubmit}>
                    <div class="login-form-entry">
                        <label className="login-label">Email</label>
                        <input className="login-input" type="text" value={this.state.email} onChange={this.onEmailChange}></input>
                        <label className="login-label">Password</label>
                        <input className="login-input" type="password" value={this.state.password} onChange={this.onPasswordChange} id="pass-input"></input>
                        <a id="forgot">Forgot password?</a>
                    </div>
                    <button id="login-button">Log in</button>
                </form>
            </div>
        </div>
    }
}