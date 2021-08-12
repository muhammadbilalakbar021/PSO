const purchaseRouter = require("../routes/purchaseRouter");
module.exports = function (app) {
  app.use("/purchase", purchaseRouter);
};
