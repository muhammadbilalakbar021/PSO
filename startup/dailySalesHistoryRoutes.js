const dailySalesHistoryRouter = require("../routes/dailySalesHistoryRouter");
module.exports = function (app) {
  app.use("/dailySalesHistory", dailySalesHistoryRouter);
};
