const productListRouter = require("../routes/productListRouter");
module.exports = function (app) {
  app.use("/productList", productListRouter);
};
