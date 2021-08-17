var express = require("express");
var router = express.Router();

// Get Expense Page
router.get("/", async (req, res) => {
  res.render("account.ejs");
});

module.exports = router;
