const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Express Routes
const recipeRoute = require('./routes/recipe');
// future routes
// const userRoute = require('./routes/user');
// const restaurantRoute = require('./routes/restaurant');
// const generateRoute = require('./routes/generate');

// get .env values
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// connect to the server
var options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
}
mongoose.connect(uri, options).
    then(() => {
        console.log("Database connection successful");
    }).
    catch(error => {
        console.log("Could not connect to database", error);
        process.exit(1);
    });

// set up express
const app = express();
app.use(express.json());
app.use(cors()); // allow for cross origin resource sharing

// endpoints
app.use('/recipes', recipeRoute);
// future endpoints
// app.use('/user', userRoute);
// app.use('/restaurant', restaurantRoute);
// app.use('/generate', generateRoute);

app.listen(port, () => console.log('Server ready, listening on port ' + port));