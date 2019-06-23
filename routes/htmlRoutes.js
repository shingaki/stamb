var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("loginPage.handlebars");
  });

  // Load Users page and pass in an user by id
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("user", {
        user: dbUser
      });
    });
  });

  app.get("/register", function(req, res) {
    res.render("registrationPage.handlebars", {
        style: "body" })
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404.handlebars");
  });

  // Render 404 page for any unmatched routes
  app.get("/login", function(req, res) {
    res.render("registrationPage.handlebars");
  });


  // Render 404 page for any unmatched routes
  app.get("/landingpage", function(req, res) {
    res.render("landingpage.handlebars");
  });
};
