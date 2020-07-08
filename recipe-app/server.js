const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');

require('dotenv').config();

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

// endpoints?
app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log('Server ready, listening on port ' + port));