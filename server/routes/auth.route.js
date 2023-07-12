const router = require("express").Router();
const { Magic } = require("@magic-sdk/admin");
const User = require("../models/user.model.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
require("dotenv").config();

const magic = new Magic(process.env.MAGIC_SECRET_KEY);

//register user
router.post("/register", async (req, res) => {
  const { email, firstname, lastname, university, stream, year, github, linkedin, bio, country, profession } = req.body;
  try {
    const user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(400).send("User already exists");
    }
    const newUser = new User({
      email,
      firstname,
      lastname,
      university,
      stream,
      year,
      github,
      linkedin,
      bio,
      country,
      profession,
    });
    await newUser.save();
    return res.status(201).send("User created successfully");
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

// check if user email exists in database
router.post("/check", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(200).json({
        status: false,
      });
    }
    return res.status(200).json({
      status: true,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

// login user
router.post("/login", async (req, res) => {
  try {
    const didToken = req.headers.authorization.substring(7);
    await magic.token.validate(didToken);
    console.log("User is authenticated");
    const issuer = await magic.token.getIssuer(didToken);
    console.log(issuer);
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(400).send("User does not exist");
    }
    //update the magicId
    user.magicId = issuer;
    await user.save();
    return res.status(200).json({ authenticated: true });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
