var express = require("express");
var router = express.Router();

// Get DailySales
router.get("/", async (req, res) => {
  res.render("prices.ejs");
});

module.exports = router;
