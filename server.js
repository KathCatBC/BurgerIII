var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));


// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var burgersController = require("./controllers/burgers_controller.js");
app.use("/", burgersController);

var usersController = require("./controllers/users_controller.js");
// app.use("/", burgersController);


db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
  	console.log("App listening on PORT " + PORT);
  });
});
