const homeRouter = require("../routes/homeRouter");
module.exports = function (app) {
  app.use("/home", homeRouter);
};
