const expenseHistoryRouter = require("../routes/expenseHistoryRouter");
module.exports = function (app) {
  app.use("/expenseHistory", expenseHistoryRouter);
};
