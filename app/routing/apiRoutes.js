var friends = require("../data/friends.js");


module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

app.post("/api/friends", function(req, res) {

    var newSurvey = req.body;
    console.log(newSurvey);
    var newFriend = [];

    for (var i = 0; i < friends.length; i++) {
        var scoreDifference = 0;

        for (var k = 0; k < friends[i].scores.length; k++) {
            var difference = Math.abs(friends[i].scores[k] - newSurvey.scores[k]);

            scoreDifference += difference;
        }

        newFriend.push({
            name: friends[i].name,
            photo: friends[i].photo,
            totalDifference: scoreDifference
        });
    }

    console.log(newFriend);

    var highScore = 50;

    for (var i = 0; i < newFriend.length; i++) {
        if (newFriend[i].totalDifference < highScore) {
            highScore = newFriend[i].totalDifference;
        }
    }

    var pickedFriend = {};

    for (var i = 0; i < newFriend.length; i++) {
        if (newFriend[i].totalDifference === highScore) {
            pickedFriend = newFriend[i];

        }
    }

    res.json(pickedFriend);
    console.log("pickedFriend" + pickedFriend);

    friends.push(newSurvey);

});

};
