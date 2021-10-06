const router = require("express").Router();

router.get("/", function (req, res) {
  console.log("Home");
  res.render("main");
});

router.get("/homepage", function (req, res) {
  console.log("Home Page");
  res.render("homepage");
});

router.get("/dashboard", function (req, res) {
  console.log("dashboard");
  res.render("dashboard");
});
router.get("/login", function (req, res) {
  console.log("login");
  res.render("login");
});

router.get("/logout", function (req, res) {
  console.log("logout");
  res.render("logout");
});

module.exports = router;
