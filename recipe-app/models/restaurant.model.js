const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        link: {
            type: String,
            required: false
        },

        users: {
            type: [String],
            default: []
        }
    }
)

module.exports = mongoose.model('Restaurant', restaurantSchema);