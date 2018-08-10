const express = require("express");
const mongoose = require('mongoose');
const keys = require("./config/keys.js");
require('./models/user.js');
require('./services/passport.js');   // no const used because the passport.js file is not sending anything back

// mongoose.connect(keys.mongoURI, options); 
  //{ useNewUrlParser: true };

 
mongoose.connect(keys.mongoURI); 

const app = express();

require('./routes/authRoutes.js')(app);  // the values for app are being sent back by ./routes/authRoutes.js file that is required. The authRoutes.js file returns a function app

// Setup the listening port for the application
const PORT = process.env.PORT || 5000;
app.listen(PORT);



/*
server.listen(PORT, function() {
    console.log("App is running on port " + PORT);
});
Examples Routes for Express
app.get, app.post, app.put, app.delete, app.patch

app.get("/", (req, res) => {
  res.send({ hi: "there monkey! - you have reached the root path of the application" });
});

app.get("/greeting", (req, res) => {
  res.send({ hi: "there - you have reached the greeting path of the application" });

  }); */
