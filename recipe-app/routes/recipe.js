// routes for recipe endpoints
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Recipe = require('../models/recipe.model');

// create recipe
router.post("/create-recipe", (req, res) => {
    var newRecipe = new Recipe({
        name: req.body.name,
        url: req.body.url,
        image: req.body.image,
        user: req.body.user
    });

    newRecipe.save(err => {
        if(err)
            res.json({resultCode: 1}); //modify result codes later
        else
            res.json({resultCode: 0});
    });
});

// get all recipes
router.get("/", (req, res) => {
    Recipe.find({user: req.body.user}, (err, recipe) => {
        if(err)
            res.json({resultCode: 1});
        else
            res.json({data: recipe, resultCode: 0});
    });
});


module.exports = router;