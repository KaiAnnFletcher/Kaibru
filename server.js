require("dotenv").config();

var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require("passport");
var logger = require("morgan");
//const mongoose = require("mongoose");
var db = require("./models")
var routes = require("./routes");
var app = express();
var PORT = process.env.PORT || 3001;
var path = require('path');
//Define middleware here
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(logger("dev"));
//Add routes, both API and view
app.use(routes);
console.log("routes:",routes);

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}
// app.use(cors());
// app.use(logger("dev"));
// //Add routes, both API and view
// app.use(routes);
// console.log("routes:",routes);
//replaced with below:
//app.use(app.router);
//routes.initialize(app);
  
// //Connect to the Mongo DB 
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kaibru");

var syncOptions = { force: false };
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
};
//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });

// //Start the API server
// app.listen(PORT, function() {
//     console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
// });