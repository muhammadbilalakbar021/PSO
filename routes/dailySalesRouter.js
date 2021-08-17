var express = require("express");
var router = express.Router();

// Get DailySales Page
router.get("/", async (req, res) => {
  res.render("dailySales.ejs");
});

router.post("/", (req, res) =>{
  console.log(req.body)
  // res.render("Home.ejs");
});

module.exports = router;
