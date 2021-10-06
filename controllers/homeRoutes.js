const router = require("express").Router();

router.get("/", function (req, res) {
  console.log("Home");
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/createpost", function (req, res) {
  console.log("createpost");
  res.render("createpost", {
    loggedIn: req.session.loggedIn,
    id: req.session.user_id,
  });
});
router.get("/login", function (req, res) {
  console.log("login");
  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/logout", function (req, res) {
  console.log("logout");
  res.render("logout", { loggedIn: req.session.loggedIn });
});

module.exports = router;
