const creditSalesRouter = require("../routes/creditSalesRouter");
module.exports = function (app) {
  app.use("/creditSales", creditSalesRouter);
};
