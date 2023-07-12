const router = require("express").Router();
const User = require("../models/user.model");
const { route } = require("./all.route");
const authMiddleware = require("../middlewares/auth.middleware.js");

router.post("/bookmark", authMiddleware, async (req, res) => {
  const magicId = req.magicId;
  const bookmark = req.body;
  try {
    const user = await User.findOne({
      magicId,
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    user.bookmarks.push(bookmark);
    await user.save();
    res.status(200).send("Bookmark added successfully.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

module.exports = router;
