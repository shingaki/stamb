module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        share: DataTypes.STRING,
        title: DataTypes.STRING,
        mystory: DataTypes.STRING
    });

    return User;
};