//npm for file paths
var path = require("path");

module.exports = function(app) {

	app.get("/survey", function(req, res) {
    	res.sendFile(path.join(__dirname, "../app/public/suyvey.html"));
    	//default to home
    	app.get("*", function(req, res) {
    	res.sendFile(path.join(__dirname, "../app/public/home.html"));
  	});

  	});
};