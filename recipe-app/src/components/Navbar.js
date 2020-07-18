import React from 'react';
import './Navbar.css';

export default class Nav extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        var link = "/"+this.props.type;
        var text = "Sign up";
        if(this.props.type === "login")
            text = "Log in";

        return <nav>
            <ul id="nav-left">
                <li id="Logo-Home"><a href="/">Recipe Book</a></li>
            </ul>
            <ul id="nav-right">
                <li className="log-sign"><a href={link}>{text}</a></li>
            </ul>
        </nav>;
    }
}