import React from 'react';
import './Recipes.css';

class RecipeCard extends React.Component 
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        var picture = null; //this.props.img
        if(picture == null)
            picture = "./default.jpg";

        var style = {backgroundImage: "url(" + {picture} + ")"};

        return <div className="recipe-card">
            <div id="img-div">
                <h2 className="recipe-name">{this.props.name}</h2>
            </div>
        </div>
    }
}


export default class Recipes extends React.Component
{
    render()
    {
        var recipe_list = ['Sukiyaki', 'Olive Oil Pasta', 'Korean Ground Beef', 'Banana Bread', 'Pie Crust']
        return <div id="recipe-page">
                <h1>My Recipes</h1>
                <ul id="card-list">
                    {recipe_list.map(function(item) {
                    return <RecipeCard name={item} key={item}/>;
                    })}
                </ul>
            </div>;
    }
}