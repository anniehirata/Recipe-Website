const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const recipeSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: false,
        },

        image: {
            type: String,
            required: false,
        },

        user: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Recipe', recipeSchema);
