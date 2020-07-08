var mongoose = require('mongoose');
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
            }
        },

        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('User', userSchema);