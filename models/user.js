'use strict';

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstname: {type:DataTypes.STRING},
        lastname: {type:DataTypes.STRING},
        email:    {type:DataTypes.STRING},
        password: {type:DataTypes.STRING},
        favourites: {type:DataTypes.JSON}
    }); 
    return User;
};