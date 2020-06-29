'use strict'

 module.exports = function(sequelize, DataTypes) {
  var Items_1 = sequelize.define("Items_1", {
  resultDetails: {type: DataTypes.STRING, unique: true, allowNull: false},
  resultThumbnail: {type: DataTypes.STRING},
  resultLink: {type: DataTypes.STRING}
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true,
});

return Items_1
};

