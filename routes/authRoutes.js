const passport = require('passport')   // this is just saying the passport.js library is required 

module.exports = (app) => {  // module.exports allows other files to call the app.get routes below it

app.get(
    "/auth/google", //whenenevr user comes into this route paasport.authenticate is invoked
        passport.authenticate("google", {
        //kick them into this oAuth flow managed by passport and use the strategy called google
        scope: ["profile", "email"] // the scope tells goggle servers that we want to access the profile and email of this user - there are other scopes we can ask for like photos
        })
  );
  
  // code below ** google sends the code and this passport call handles it by sending it back to Google and gets the profile info and email information back
  app.get("/auth/google/callback", passport.authenticate("google"));

};