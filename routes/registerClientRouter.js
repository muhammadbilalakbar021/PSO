var express = require("express");
var router = express.Router();

// Get Purchase
router.get("/", async (req, res) => {
  res.render("registerClient.ejs");
});

module.exports = router;
