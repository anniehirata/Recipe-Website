import React from 'react';
import './Navbar.css';

export default class Nav extends React.Component {
    render()
    {
        // todo: add links to these navbar items
        return <nav>
            <ul id="nav-left">
                <li id="Logo-Home"><a href="/">Recipe Book</a></li>
            </ul>
            <ul id="nav-right">
                <li><a href="/recipes">RECIPES</a></li>
                <li><a>RESTAURANTS</a></li>
                <li><a>MY WEEK</a></li>
                <li><a>ACCOUNT</a></li>
            </ul>
        </nav>;
    }
}