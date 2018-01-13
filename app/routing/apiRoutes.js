//link data source
var friendsData = require("../data/friends.js");
//route
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	//friend post 
	app.post("/api/friends", function(req, res) {
		//get new friend info
		var newFriend = {
			name: req.body.name,
			photo: req.body.photo,
			scores: []
		};

		//var matchFriends

		//for loop through friends

		//compare scores

		//match friends







	//add new friend
    friends.push(req.body);
	});
};

