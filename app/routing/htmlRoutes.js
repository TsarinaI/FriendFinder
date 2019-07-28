// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.
module.exports = function(app) {
    // app.get("/", function(req, res){
    //     res.sendFile(path.join(__dirname, "app/public/home.html"));
    // });

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    });

    // This replaces the app.get above so that it's a catch-all instead of a specific route
    app.use("/", function(req, res){
        res.sendFile(path.join(__dirname, "app/public/home.html"));
    })
}