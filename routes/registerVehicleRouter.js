var express = require("express");
var router = express.Router();

// Get Purchase
router.get("/", async (req, res) => {
  res.render("registerVehicle.ejs");
});

module.exports = router;
