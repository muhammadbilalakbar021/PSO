const loginRouter = require("../routes/loginRouter");
module.exports = function (app) {
  app.use("/login", loginRouter);
};
