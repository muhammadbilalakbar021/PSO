const addPurchaseRouter = require("../routes/addPurchasesRouter");
module.exports = function (app) {
  app.use("/addPurchase", addPurchaseRouter);
};
