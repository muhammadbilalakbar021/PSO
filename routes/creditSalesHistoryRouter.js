var express = require("express");
var router = express.Router();

// Get Expense Page
router.get("/", async (req, res) => {
  res.render("creditSalesHistory.ejs");
});

module.exports = router;
