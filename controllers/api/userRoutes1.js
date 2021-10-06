const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  console.log("User creation router++++++++++", req.body);
  try {
    let userData = await User.create(req.body);
    userData = userData.get({ plain: true });
    console.log(userData, "User created");
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_name = userData.name;
      req.session.user_username = userData.username;
      req.session.logged_in = true;
      console.log(
        req.session.user_name,
        req.session.user_username,
        req.session.user_id
      );

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
