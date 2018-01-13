//link data source
var friendsData = require("../data/friends.js");
//route
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	//friend post 
	app.post("/api/friends", function(req, res) {
		var newFriend = {
			name: req.body.name,
			photo: req.body.photo,
			scores: []
		};





    friends.push(req.body);
	});
};

