var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
        console.log();

        var newFriendResponses = newFriend.scores;
        console.log("newFriendResponses = " + newFriendResponses);

        var matchName = "";
        var matchImage = "";
        var totalDifference = 10000;


        for(var i = 0; i < friends.length; i++) {
            console.log("friend = " + JSON.stringify(friends[i]));
            var difference = 0;
            for (var j = 0; j < newFriendResponses.length; j++) {
                difference += Math.abs(friends[i].scores[j] - newFriendResponses[j]);
            }
            console.log('difference = ' + difference);
            if (difference < totalDifference) {
                console.log("Closest Match = " + difference);
                console.log("Friend name = " + friends[i].name);
                console.log("Friend Image = " + friends[i].photo);

                totalDifference = difference;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        friends.push(newFriend);

        res.json({status: "OK", matchName: matchName, matchImage: matchImage});
    });


}