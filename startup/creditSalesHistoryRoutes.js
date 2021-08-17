const creditSalesHistoryRouter = require("../routes/creditSalesHistoryRouter");
module.exports = function (app) {
  app.use("/creditSalesHistory", creditSalesHistoryRouter);
};
