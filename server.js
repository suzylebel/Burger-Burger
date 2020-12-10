var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function(req, res) {
    connection.query("SELECT * FROM Burgers;", function(err, data) {
      if (err) throw err;
      res.render("index", { Burgers: data });
    });
  });

  app.post("/", function(req, res) {
    connection.query("INSERT INTO Burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
      if (err) throw err;
      res.redirect("/");
    });
  });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });