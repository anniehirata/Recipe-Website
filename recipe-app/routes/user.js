const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = express.Router();

const User = require('../models/user.model');



// Create account
router.post("/signup", async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);

    var newUser = new User(req.body);

    await newUser.save(err => {
        if(err)
        {
            console.log(err);
            res.json({resultCode: 1, error: err});
        }
        else
        {
            // generate token/session
            res.json({resultCode: 0});
        }            
    });
});

// Sign in
router.post("/login", async (req, res) => {
    // get hashed password from the database and compare
    User.findOne({email: req.body.email}).then(user => {
        if(!user)
            res.json({
                resultCode: 1,
                message: "Account not found"
            });

        // user found so compare password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch)
            {
                res.json({
                    resultCode: 0,
                    message: "Signed in"
                });
            }
            else
            {
                res.json({
                    resultCode: 1,
                    message: "Incorrect password"
                });
            }
        });
    });

});


module.exports = router;