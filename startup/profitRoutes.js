const profitRouter = require("../routes/profitRouter");
module.exports = function (app) {
  app.use("/profit", profitRouter);
};
