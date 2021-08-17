var express = require("express");
var router = express.Router();

// Get DailySales
router.get("/", async (req, res) => {
  res.render("prices.ejs");
});

router.post("/", (req, res) =>{
  console.log(req.body)
  res.render("Home.ejs")
})

module.exports = router;
