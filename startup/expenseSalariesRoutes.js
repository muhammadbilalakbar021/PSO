const expenseSalariesRouter = require("../routes/expenseSalariesRouter");
module.exports = function (app) {
  app.use("/expenseSalaries", expenseSalariesRouter);
};
