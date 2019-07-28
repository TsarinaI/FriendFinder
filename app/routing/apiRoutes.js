// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friends = require("../data/friends");

module.exports = function (app) {
    // Return or "get" all friends found in friends.js as JSON (Star Wars 3 Activity)
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        // Var for user details (name, photo, scores)
        var user = req.body;

        // parse out dem scores
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        // !!THE BELOW CODE WAS FOUND ON THE INTERWEBS. I get it but was having trouble figuring out the calculation stuff by myself
        // default friend match is the first friend but result will be whoever has the minimum difference in scores
        var bestFriendIndex = 0;
        var minimumDifference = 40;

        // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
        //  whatever the difference is, add to the total difference
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
            if (totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }
        // !!!!END OF COPIED CODE
        // after you have a match, push user to friend array
        friends.push(user);

        // send back to browser the best friend match
        res.json(friends[bestFriendIndex]);
    });
};