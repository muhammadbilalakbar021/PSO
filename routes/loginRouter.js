var express = require("express");
var router = express.Router();

// Get Log in
router.get("/", async (req, res) => {
  res.render("index.ejs");
});

router.get("/home", async (req, res) => {
  console.log("get Honme");
  res.render("Home.ejs");
});
// Post  Password Check
router.post("/", async (req, res) => {
  console.log(req.body.password);
  if (req.body.password === "123321") {
    res.render("Home.ejs");
  }
});

module.exports = router;
