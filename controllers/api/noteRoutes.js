const router = require("express").Router();
const { Newnote } = require("../../models");

router.post("/create", async (req, res) => {
  console.log("Post note", req.body);
  try {
    const newPost = await Newnote.create({
      ...req.body,
    });
    console.log("Create note", newPost);
    res.status(200).json(newPost);
  } catch (err) {
    console.log("Err on create note", err);
    res.status(400).json(err);
  }
});
router.get("/allposts", async (req, res) => {
  console.log("Get all posts", req.body);
  try {
    let allPosts = await Newnote.findAll({ raw: true });

    console.log("Get all posts", allPosts);
    res.status(200).render("request", { allPosts: allPosts });
  } catch (err) {
    console.log("Err on post", err);
    res.status(400).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
