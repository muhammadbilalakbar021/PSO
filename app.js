var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "renderer")));
app.use(express.static(path.join(__dirname, "vendor")));

// mongoose.connect(('mongodb://localhost/PSO'), {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log('Connected to MongoDB...'));

// app.use("/", index);

// Login Routes
require("./startup/loginRoutes")(app);
// Home Routes
require("./startup/homeRoutes")(app);
// Purchase Routes
require("./startup/purchaseRoutes")(app);
require("./startup/addPurchaseRoutes")(app);
require("./startup/purchaseHistoryRoutes")(app);
// Daily Sales Routes
require("./startup/dailySalesRoutes")(app);
require("./startup/dailySalesHistoryRoutes")(app);
require("./startup/productListRoutes")(app);
require("./startup/invetoryListRoutes")(app);
// Credit Sales Routes
require("./startup/creditSalesRoutes")(app);
require("./startup/registerVehicleRoutes")(app);
require("./startup/registerClientRoutes")(app);
require("./startup/addSalesRoutes")(app);
require("./startup/generateBillRoutes")(app);
require("./startup/creditSalesHistoryRoutes")(app);
require("./startup/accountRoutes")(app);
// Expense Routes
require("./startup/expenseRoutes")(app);
require("./startup/expenseBillRoutes")(app);
require("./startup/expenseSalariesRoutes")(app);
require("./startup/expenseOtherRoutes")(app);
require("./startup/expenseHistoryRoutes")(app);
// Profit Routes
require("./startup/profitRoutes")(app);
// Prices Routes
require("./startup/pricesRoutes")(app);

const server = app.listen(3009, () =>
  console.log(`Express server listening on port 3009`)
);

module.exports = app;
