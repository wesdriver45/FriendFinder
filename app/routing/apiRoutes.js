//link data source
var friendsData = require("../data/friends");
//route
module.exports = function(app) {
	app.get("api/friends", function(req, res) {
		res.json(friends);
	});

	//friend post 
	app.post("api/friends", function(req, res) {
		
	})
}

