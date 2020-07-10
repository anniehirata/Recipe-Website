const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            validate: {
                validator: function(email) {
                  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); // email regex
                },
                message: props => `${props.value} is not a valid email`
            },
            unique: true
        },

        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        password: {
            type: String,
            min: [8, "Password must be at least 8 characters"],
            required: true
        }

        //for later: friends list and maybe recipes shared list
        // friends: {
        //     type: [String],
        //     default: []
        // }
    }
);

module.exports = mongoose.model('User', userSchema);