const generateBillRouter = require("../routes/generateBillRouter");
module.exports = function (app) {
  app.use("/generateBill", generateBillRouter);
};
