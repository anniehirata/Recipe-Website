import React from 'react';
import './Signup-Page.css';
import axios from 'axios';
import Nav from './Navbar';

export default class SignupPage extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            password: ""
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleFirstChange = this.handleFirstChange.bind(this)
        this.handleLastChange = this.handleLastChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmailChange(event)
    {
        this.setState({email: event.target.value});
    }

    handleFirstChange(event)
    {
        this.setState({firstName: event.target.value});
    }

    handleLastChange(event)
    {
        this.setState({lastName: event.target.value});
    }

    handlePasswordChange(event)
    {
        this.setState({password: event.target.value});
    }

    handleSubmit(event)
    {
        event.preventDefault();
        // make call to backend
        const userObject = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password
        };

        axios.post('http://localhost:5000/user/signup', userObject)
            .then(res => {
                console.log(res);
                if(res.data.resultCode === 0)
                {
                    alert('Signed up successfully!');
                    this.setState({
                        email: '',
                        firstName: '',
                        lastName: '',
                        password: ''
                    });
                }
                else if(res.data.resultCode === 1)
                    alert('Error signing up');
            });
    }

    render()
    {
        return <div><Nav type="login"/>
            <div id="signup-page">
            <h1>Your cookbook, digitized!</h1>
            <h2 id="description">Store all your favorite recipes in one place, accessible anywhere!</h2>
            <h2>Sign up to start your free cookbook today!</h2>
            
            <form onSubmit={this.handleSubmit} id="signup-form">
                <div className="name-entry">
                    <label className="signup-label">First Name</label>
                    <input className="signup-input" type="text" value={this.state.firstName} onChange={this.handleFirstChange}></input>
                </div>
                <div className="name-entry" id="last-name">
                    <label className="signup-label">Last Name</label>
                    <input className="signup-input" type="text" value={this.state.lastName} onChange={this.handleLastChange}></input>
                </div>
                
                <div id="other-entry">
                    <label className="signup-label">Email</label>
                    <input className="signup-input" type="text" value={this.state.email} onChange={this.handleEmailChange}></input>
                    <label className="signup-label">Password</label>
                    <input className="signup-input" type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                    
                </div>
                <button id="signup-button">Create Account</button>
            </form>
        </div>
        </div>;
    }
}