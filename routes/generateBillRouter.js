var express = require("express");
var router = express.Router();

// Get Expense Page
router.get("/", async (req, res) => {
  res.render("generateBill.ejs");
});

router.post("/", (req, res) =>{
  console.log(req.body)
  // res.render("expense.ejs");
});

module.exports = router;
