const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const items_1Schema = new Schema({
    resultDetails: String,
    resultThumbnail: String,
    resultLink: String,
    resultLinkId: String
});

const Items_1 = mongoose.model("items_1", items_1Schema);

module.exports = Items_1;

// 'use strict'

//  module.exports = function(sequelize, DataTypes) {
//   var Items_1 = sequelize.define("Items_1", {
//   resultDetails: {type: DataTypes.STRING, unique: true, allowNull: false},
//   resultThumbnail: {type: DataTypes.STRING},
//   resultLink: {type: DataTypes.STRING}
// }, {
//   // disable the modification of tablenames; By default, sequelize will automatically
//   // transform all passed model names (first parameter of define) into plural.
//   // if you don't want that, set the following
//   freezeTableName: true,
// });

// return Items_1
// };

