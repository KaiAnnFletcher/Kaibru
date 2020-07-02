require("dotenv").config();
var mongoose = require("mongoose");
var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require("passport");
var logger = require("morgan");
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
   app.use('/static', express.static('client/build/static'));
}

app.use(passport.initialize());

//Passport middleware
//Passport config
require("./config/passport")(passport);

// Connect to the Mongo DB 
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kaibru");
mongoose.connect(process.env.MONGODB_URI || "mongodb://kaibru_user:kaibru1@ds035488.mlab.com:35488/heroku_tk82nh0f");

//Send every other request to the React app
//Define any API routes before this runs
// -app.get('/', function (req, res) {
// +app.get('/*', function (req, res) {
//    res.sendFile(path.join(__dirname, "/client/build/index.html"));
//  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});