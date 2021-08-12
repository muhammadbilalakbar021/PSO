var express = require("express");
var router = express.Router();

// Get Home  Page
router.get("/", async (req, res) => {
  res.render("Home.ejs");
});

// Post  Password Check
router.post("/", async (req, res) => {
  console.log("post");
  res.render("Home.ejs");
});

module.exports = router;
