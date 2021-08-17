const purchaseHistoryRouter = require("../routes/purchaseHistoryRouter");
module.exports = function (app) {
  app.use("/purchaseHistory", purchaseHistoryRouter);
};
