//
// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//         username: DataTypes.STRING,
//         password: DataTypes.STRING,
//         first: DataTypes.STRING,
//         last: DataTypes.STRING,
//         email: DataTypes.STRING,
//         confirmit: DataTypes.STRING,
//         phone: DataTypes.STRING,
//     });
//
//     return User;
// };


module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        share: DataTypes.STRING,
        mystory: DataTypes.STRING
    });

    return User;
};