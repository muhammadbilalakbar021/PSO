const expenseOtherRouter = require("../routes/expenseOtherRouter");
module.exports = function (app) {
  app.use("/expenseOther", expenseOtherRouter);
};
