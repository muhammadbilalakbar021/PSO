const registerVehicleRouter = require("../routes/registerVehicleRouter");
module.exports = function (app) {
  app.use("/registerVehicle", registerVehicleRouter);
};
