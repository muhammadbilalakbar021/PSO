var express = require("express");
var router = express.Router();

// Get Purchase
router.get("/", async (req, res) => {
  res.render("registerVehicle.ejs");
});

router.post("/", (req, res) =>{
  console.log(req.body)
  // res.render("expense.ejs");
});

module.exports = router;
