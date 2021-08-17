const expenseRouter = require("../routes/expenseRouter");
module.exports = function (app) {
  app.use("/expense", expenseRouter);
};
