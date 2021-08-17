const expenseBillRouter = require("../routes/expenseBillRouter");
module.exports = function (app) {
  app.use("/expenseBill", expenseBillRouter);
};
