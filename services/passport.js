// for use with Google oauth20

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys.js"); // if the file is a js file the file extension is not required so ./config/keys will suffice

const User = mongoose.model('users');  //  the User Object is our model class to give us access to the underlying collection in MongoDb.

passport.use(
    new GoogleStrategy( //GoogleStrategy has code that says I am known as 'google' internal identifier - see below at passport.authenticate line where it is called
      {
        clientID: keys.googleClientID, // App token ID for this site  kept in keys.js file
        clientSecret: keys.googleClientSecret, // password for the token also kept in keys.js file
        callbackURL: '/auth/google/callback' // once the user is granted permission by Google they get routed back to this URL
      },
      (accessToken, refreshToken, profile, done) => {
        new User( { goodleId: profile.id }).save();   // create a new user who has a googleID of this profile - creates a new instance of a user - 

      }
    )
  );
  
  
  /*
  (accessToken, refreshToken, profile, done) => {
        console.log("access token", accessToken);
        console.log("refresh token", refreshToken);
        console.log("profile", profile);
      }
    )
    */