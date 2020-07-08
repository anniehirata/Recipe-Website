import React from 'react';
import './Recipes.css';

class RecipeCard extends React.Component 
{
    constructor(props)
    {
        super(props);
    }

    // componentDidMount()
    // {
    //     // get recipe information here
    // }

    render()
    {
        var picture = null; //this.props.img
        if(picture == null)
            picture = "./default.jpg";

        var name = "/recipe/:"+this.props.id;

        // todo: set background image from here
        var style = {backgroundImage: "url(" + {picture} + ")"};

        return <a href={name} className="recipe-card">
            <div id="img-div">
                <h2 className="recipe-name">{this.props.name}</h2>
            </div>
        </a>
    }
}


export default class Recipes extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            recipe_list: []
        };
    }

    componentDidMount()
    {
        this.setState({
            recipe_list: [{name: "Sukiyaki", id: 1}, {name: "Olive Oil Pasta", id: 2}, 
            {name: "Pie Crust", id: 3}, {name: "Teriyaki Chicken", id: 4}]
        });
    }

    render()
    {
        return <div id="recipe-page">
                <h1>My Recipes</h1>
                <ul id="card-list">
                    {this.state.recipe_list.map(function(item) {
                    return <RecipeCard name={item.name} key={item.id} id={item.id}/>;
                    })}
                </ul>
            </div>;
    }
}