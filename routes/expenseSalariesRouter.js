var express = require("express");
var router = express.Router();

// Get Expense Page
router.get("/", async (req, res) => {
  res.render("expenseSalaries.ejs");
});

router.post("/", (req, res) =>{
  console.log(req.body);
  // if bonus "on" then save bonus
});


module.exports = router;
