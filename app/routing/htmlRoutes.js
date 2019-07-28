// Your `htmlRoutes.js` file should include two routes:
var path = require("path");
//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.
module.exports = function(app) {

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // This replaces the app.get so that it's a catch-all instead of a specific route
    app.use("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}