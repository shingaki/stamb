var db = require("../models");

module.exports = function (app) {
    // Get all users
    app.post("/api/login/:username", function (req, res) {

        console.log('input ' + req.body.username);
        console.log('input ' + req.body.password);

        db.User.findOne({where: {username: req.body.username}}).then(function (dbUser) {
            if (!dbUser) {
                console.log("user is not found");
                res.json({error: 'user invalid'});
            } else {
                console.log("user found");
                console.log("dbUser password " + dbUser.password);
                console.log("password provided " + req.body.password);
                if (dbUser.password != req.body.password) {
                    console.log("passwords do not match");
                    res.json({error: 'user invalid'})
                } else {
                    console.log("password match");
                    res.json(dbUser);
                }
            }
        });
    });


    // Delete an User by id
    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({where: {id: req.params.id}}).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    // Get user to see if they are unique username
    app.post("/api/register/user/:username", function (req, res) {
        console.log('register provided ' + req.body.username);
        db.User.findOne({where: {username: req.body.username}}).then(function (dbUser) {
            if (dbUser) {
                console.log("user was found");
                res.json({error: 'username is not unique'});
            } else {
                console.log("user not found");
                res.json(dbUser);
            }
        });
    });

    // Create a new User
    app.post("/api/register", function (req, res) {
        db.User.create(req.body).then(function () {

            console.log("create the user");


            db.User.findOne({where: {username: req.body.username}}).then(function (dbUser) {
                console.log("dbUser " + dbUser);
                res.json(dbUser);
            });
            
        });
        
      
    });


    // Update story
    app.put("/api/update/:userid", function (req, res) {

        console.log('req mystory ' + req.body.mystory);
        console.log('req title ' + req.body.title);
        console.log('req id ' + req.body.id);

        db.User.update({title: req.body.title, mystory: req.body.mystory},
            {where: {id: req.body.id}})
            .then(function (result) {
            console.log("after the update");
                if (result.changedRows === 0) {
                    console.log("no update made");
                } else {
                    console.log("update made");
                    res.send(result);
                }
            })
    });
}





