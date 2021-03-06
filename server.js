//npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express server
var app = express();
//port
var PORT = process.env.PORT || 3000;

//data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//api/html routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listner
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});