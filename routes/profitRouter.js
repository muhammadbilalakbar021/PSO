var express = require("express");
var router = express.Router();

// Get Profit Page
router.get("/", async (req, res) => {
  res.render("profit.ejs");
});

module.exports = router;
