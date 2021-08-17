var express = require("express");
var router = express.Router();

// Get Expense Page
router.get("/", async (req, res) => {
  res.render("expenseOther.ejs");
});

router.post("/", (req, res) =>{
  console.log(req.body);
});

module.exports = router;
