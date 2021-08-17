const addSalesRouter = require("../routes/addSalesRouter");
module.exports = function (app) {
  app.use("/addSales", addSalesRouter);
};
