var express = require("express");
var router = express.Router();

// Get Expense Page
router.get("/", async (req, res) => {
  res.render("expenseHistory.ejs");
});

// router.post("/dfkghd", async (req, res) =>{

// })

module.exports = router;
