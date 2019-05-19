var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));


require("./app/routing/apiRoutes")(app);
require("./app/routing/html.Routes")(app);



app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});