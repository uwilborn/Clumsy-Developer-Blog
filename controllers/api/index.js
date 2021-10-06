const router = require("express").Router();
const userRoutes = require("./userRoutes");
const noteRoutes = require("./noteRoutes");
const userRoutes1 = require("./userRoutes1");

router.use("/users1", userRoutes1);
router.use("/users", userRoutes);
router.use("/create", noteRoutes);

module.exports = router;
