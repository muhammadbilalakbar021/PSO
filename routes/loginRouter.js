var express = require("express");
var router = express.Router();

// Get Log in
router.get("/", async (req, res) => {
  try {
    res.status(200).send("index.ejs");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Post  Password Check
router.post("/", async (req, res) => {
  console.log(req.body.password);
  try {
    res.status(200).send("Home.ejs");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
