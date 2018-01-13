//link data source
var friendsData = require("../data/friends.js");
//route
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	//friend post 
	app.post("/api/friends", function(req, res) {

		if (friends.length < 5) {
      friends.push(req.body);
      res.json(true);
    }
    else {
      friends.push(req.body);
      res.json(false);
    }
	});
};

