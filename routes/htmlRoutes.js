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

  app.get("/compose", function(req, res) {
    res.render("compose.handlebars");
  });

  app.get("/story", function(req, res) {
    res.render("story.handlebars");
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

  // app.get("/register", function(req, res) {
  //   res.render("registrationPage.handlebars", {
  //       style: "main_body" })
  // });

  app.get("/thankyou", function(req, res) {
    res.render("thankyou.handlebars");
  });


  app.get("/story", function(req, res) {
    res.render("story.handlebars");
  });



  // Render 404 page for any unmatched routes
  // app.get("/login", function(req, res) {
  //   res.render("registrationPage.handlebars");
  // });


  // Render 404 page for any unmatched routes
  app.get("/landingpage", function(req, res) {
    res.render("landingpage.handlebars");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404.handlebars");
  });
};
