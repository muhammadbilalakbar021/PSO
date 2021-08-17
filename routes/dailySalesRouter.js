var express = require("express");
var router = express.Router();

// Get DailySales Page
router.get("/", async (req, res) => {
  res.render("dailySales.ejs");
});

module.exports = router;
