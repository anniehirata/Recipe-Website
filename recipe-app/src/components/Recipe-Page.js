import React from 'react';
import './Recipe-Page.css';


export default class RecipePage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name: ""
        };
    }

    componentDidMount()
    {
        // replace this with an api call
        var recipeName;
        switch(this.props.match.params.id.slice(1))
        {
            case "1":
                recipeName = "Sukiyaki";
                break;
            case "2":
                recipeName = "Olive Oil Pasta";
                break;
        };

        this.setState({name: recipeName});
    }

    render()
    {
        return <div id="recipe-container">
            <h1>Recipe Name: {this.state.name}</h1>
        </div>;
    }
}