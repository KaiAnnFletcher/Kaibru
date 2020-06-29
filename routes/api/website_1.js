var router = require("express").Router();
var website_1Controller = require("../../controllers")
var Items_1 = require("../../models");
require("./website_1_db");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server

var axios = require("axios");
var cheerio = require("cheerio");

//mainscrape = function()  {
//Now to configure the routes
router.get("/scrape", function(req, res, next) {
//instead of simple res.render, user router.get  
console.log("scraping started...");
//Grab the html body with axios    
axios.get("https://greenheartshop.org/").then(function(response) {
//Load to cheerio and save to $ selector
    console.log("Scraping all gimmethegoodstuff mainpage...");
    var $ = cheerio.load(response.data);
    var output = [];
    var promises = [];

//Now we need to grab the title reference for each article
$("article").each(function(i, element) {

//save empty result object
var result = {};
//thumbnail
result.thumbnail = $(this)
//greenheartshop
.children("figure.product-item-thumbnail")
.children("a")
.children("div.replaced-image.ratio-1-1")
.children("img")
.attr("src")

console.log(result.thumbnail)

var result = {}
//details
result.detail= $(this)
//greenheartshop
.children("div.product-item-details")
.text()

console.log(result.detail)

var result = {}
//link
result.link = $(this)
//greenheartshop
.children("figure.product-item-thumbnail")
.children("a")
.attr("href")

console.log(result.link)

//Capture the scraped data and save to database
console.log("Capturing Scrape...")
if(result.thumbnail !== '' || result.link !== '') {
    var thumbnailResult = result.thumbnail;
    var detailsResult = result.detail;
    var linkResult = result.link.match(/\d{4,6}/g);
    var promise = Items_1;
    saveToDatabase(thumbnailResult, detailsResult, linkResult)
    console.log("saveToDatabase");
    promises.push(promise);
}
Promise.all(promises).then((data) => {
    res.json(data)
});
});
});
next()
});
router.get('/scrape', website_1Controller.findAll)

//Start of code for the specific scrape
router.get("/search/:search", function (req, res, next) {
    axios.get("https://greenheartshop.org/search.php?search_query=" + req.params.search).then(function (response) {
        console.log("***** scraping specific page *****"); 
        var $ = cheerio.load(response.data);
        var output = [];
        var promises = [];

        $("article").each(function(i, element) {
            //Save empty result object
            var result = {};

            //thumbnail
            result.thumbnail = $(this)
            //greenheartshop
            .children("figure.product-item-thumbnail")
            .children("a")
            .children("div.replaced-image.ratio-1-1")
            .children("img")
            .attr("src")

            console.log(result.thumbnail)

            var result = {};
            //details
            result.detail= $(this)
            //greenheartshop
            .children("div.product-item-details")
            .text()

            console.log(result.detail)

            var result = {}
            //link
            result.link = $(this)
            //greenheartshop
            .children("figure.product-item-thumbnail")
            .children("a")
            .attr("href")
            
            console.log(result.link)

//Capture the scraped data and save to database
console.log("Capturing Scrape data...")
if(result.detail !== '' && result.link !== '') {
    var thumbnailResult = result.thumbnail;
    var detailsResult = result.detail;
    var linkResult = result.link.match(/\d{4,6}/g);
    var promise = Items_1;
    saveToDatabase(thumbnailResult, detailsResult, linkResult)
    console.log("saveToDatabase");
    promises.push(promise);
}
Promise.all(promises).then((data) => {
    res.json(data);
});            
});
});
next()
});
router.get('/search', website_1Controller.findAll)

// router.get('/scrape:id', (req, res, next) => {
//     console.log("Routing...")
//     website_1Controller.findById()
//      .then((search) => {
//      search ? res.status(200).send({ singleItems_1: search }) : res.status(200).send({ errMsg: "Search does not exist" 
//      }).catch(err => next(err))
//     });
// });

module.exports = router;


