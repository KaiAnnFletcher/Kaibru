var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./api");

//API Routes
//authRouter.use(require('./authenticate').basic(usersdb))
//router.use("/api", apiRoutes);
console.log("Hitting API routes...")
router.use("/api", apiRoutes);
console.log("API Routes hit")
//If no API routes are hit, send the React app
   router.use(function(req, res) {
   res.sendFile(path.join(__dirname, "../client/build/static/index.html"));
   });

module.exports = router