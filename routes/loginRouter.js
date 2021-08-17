var express = require("express");
var router = express.Router();

// Get Log in
router.get("/", async (req, res) => {
  res.render("index.ejs");
});

// Post  Password Check
router.post("/", async (req, res) => {
  console.log(req.body.password);
  // if (req.body.password === "123321") {
    res.render("Home.ejs");
  }
// }
);

module.exports = router;
