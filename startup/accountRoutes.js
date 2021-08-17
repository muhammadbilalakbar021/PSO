const accountRouter = require("../routes/accountRouter");
module.exports = function (app) {
  app.use("/account", accountRouter);
};
