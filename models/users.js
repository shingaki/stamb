var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        first: DataTypes.STRING,
        last: DataTypes.STRING,
        email: DataTypes.STRING,
        confirmit: DataTypes.STRING,
        phone: DataTypes.STRING,
    });
    
    return User;
};