const pricesRouter = require("../routes/pricesRouter");
module.exports = function (app) {
  app.use("/prices", pricesRouter);
};
