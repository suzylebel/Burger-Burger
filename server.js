var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var routes = require("./controllers/burgers_controller");

var PORT = process.env.PORT || 8000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 



// variable for routes from above
app.use(routes);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });