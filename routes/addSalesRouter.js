var express = require("express");
var router = express.Router();

// Get Purchase
router.get("/", async (req, res) => {
  res.render("addSales.ejs");
});

router.post("/", (req, res) =>{
  console.log(req.body)
  res.render("creditSales.ejs");
});

module.exports = router;
