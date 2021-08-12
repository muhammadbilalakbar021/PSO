var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "renderer")));
app.use(express.static(path.join(__dirname, "vendor")));

// app.use("/", index);

require("./startup/loginRoutes")(app);
require("./startup/purchaseRoutes")(app);
require("./startup/homeRoutes")(app);

const server = app.listen(3000, () =>
  console.log(`Express server listening on port 3000`)
);

module.exports = app;
