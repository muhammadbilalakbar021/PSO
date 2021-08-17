const inventoryListRouter = require("../routes/inventoryListRouter");
module.exports = function (app) {
  app.use("/inventoryList", inventoryListRouter);
};
