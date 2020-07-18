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


module.exports = router;