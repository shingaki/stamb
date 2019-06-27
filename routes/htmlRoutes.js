var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index.handlebars");
  });

  app.get("/index", function(req, res) {
    res.render("index.handlebars");
  });

  app.get("/profile", function(req, res) {
    res.render("profile.handlebars");
  });

  app.get("/settings", function(req, res) {
    res.render("settings.handlebars");
  });

  app.get("/compose:id", function(req, res) {
    var data = {
      id: req.params.id
    }
    res.render("compose.handlebars", data);
  });

  app.get("/composeblank", function(req, res) {
    res.render("composeblank.handlebars");
  });


  app.get("/meettheADKTeam", function(req, res) {
    res.render("meettokushu.handlebars");
  });

  app.get("/uploadpictures", function(req, res) {
    res.render("uploadphotos.handlebars");
  });


  // Load Users page and pass in an user by id
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("user", {
        user: dbUser
      });
    });
  });



  app.get("/thankyou", function(req, res) {
    res.render("thankyou.handlebars");
  });


// show the story page
  app.get("/story:id", function(req, res) {
    db.User.findAll({
    }).then(function(data) {
      var storiesObj = {
        story: data
      };
      res.render("story", storiesObj);
    });
  });


  // Render 404 page for any unmatched routes
  app.get("/landingpage", function(req, res) {
    res.render("landingpage.handlebars");
  });

  app.get("/logout", function(req, res) {
    res.render("index.handlebars");
  });
  
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404.handlebars");
  });
};
