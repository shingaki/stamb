var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/login/:username", function(req, res) {
    db.User.findOne({where: { username: req.params.username } }).then(function(dbUser) {
      if (!dbUser) { console.log("user is not found")
        res.json({ error: 'user is not found' })
      }
      else { console.log("user found")};
      // res.json(dbUser);
    });
  });

  // Create a new User
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an User by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new User
  app.post("/register", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      console.log('here');
      res.json(dbUser);
    });
  });

};
