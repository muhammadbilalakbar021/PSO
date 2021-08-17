var express = require("express");
var router = express.Router();

// Get DailySales Page
router.get("/", async (req, res) => {
  res.render("dailySalesHistory.ejs");
});

module.exports = router;
