const registerClientRouter = require("../routes/registerClientRouter");
module.exports = function (app) {
  app.use("/registerClient", registerClientRouter);
};
