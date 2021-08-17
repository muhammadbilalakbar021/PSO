const dailySalesRouter = require("../routes/dailySalesRouter");
module.exports = function (app) {
  app.use("/dailySales", dailySalesRouter);
};
