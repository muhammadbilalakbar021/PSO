var express = require("express");
var router = express.Router();

// Get CreditSales
router.get("/", async (req, res) => {
  res.render("creditSales.ejs");
});

module.exports = router;
