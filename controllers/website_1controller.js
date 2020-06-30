// *********************************************************************************
// website_1controllers.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const Items_1 = require("../models/items_1");

// Defining methods for the recipesController
module.exports = {
  findAll: function(req, res) {
    Items_1
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Items_1
      .findOne({linkid: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Items_1
      .findOneAndUpdate(req.body, req.body, {upsert:true, new:true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Items_1
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// var db = require("../models");


// //display results for mainpage scrape
// module.exports = {

//  findAll: (req, res) => {
//    db.Items_1
//   .findAll({})
//   //.sort({ date: -1 })
//   .then(dbItems_1 => res.json(dbItems_1))
//   .catch(err => res.status(422).json(err));
//  },

//  findById: async (req, res) => {
//     db.Items_1
//    .findOne({resultDetails: req.params.id})
//    .then(dbModel => res.json(dbModel))
//    .catch(err => res.status(422).json(err));
//  },

//  findOrCreate: async (req, res) => {
//   db.Items_1
//   .findOrCreate(req.body, req.body, {upsert:true, new:true})
//   .then(dbModel => res.json(dbModel))
//   .catch(err => res.status(422).json(err));
//  }
// }
// // function(err, results) {
// //   if (err) { return next(err); } //Error in API usage.
// //   if (results.result.thumbnail==={} && results.result.detail==="") {//No Results.
// //     var err = new Error('Results not found');
// //     err.status = 404;
// //     return next(err)
// //   }
// //   //Successful, so render
// //   res.render("click_results", { title: 'Click Results', resultThumbnail: result.thumbnail, resultDetails: result.detail });
// // }
// // //display results for mainpage scrape
// // exports.items_1_create = function(req, res) {

// //   db.Items_1.findOneAndUpdate(req.body, req.body, {upsert: true, new: true})
// //   .then(dbModel => res.json(dbModel))
// //   .catch(err => res.status(422).json(err))
// //   console.log("findOneAndUpdate complete")
// // },

// // exports.items_1_list = function(req,res) {
// // db.Items_1.findAll({})
// // },

// // exports.items_1_specific = function(req,res) {
// // db.Items_1.findById(req.params.search)
// // },

// // function(err, results) {
// // if (err) { return next(err); } //Error in API usage.
// // if (results.result.thumbnail==={} && results.result.detail==="") {//No Results.
// // var err = new Error('Results not found');
// // err.status = 404;
// // return next(err)
// // }
// // //Successful, so render
// // res.render("click_results", { title: 'Click Results', resultThumbnail: result.thumbnail, resultDetails: result.detail });

// // }