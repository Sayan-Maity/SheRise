const router = require("express").Router();
const User = require("../models/user.model");
const hackathons = require("../data/hackathons.json");
const internships = require("../data/internships.json");
const hiring = require("../data/hiring.json");
const workshops = require("../data/workshops.json");
const conferences = require("../data/conferences.json");
const authMiddleware = require("../middlewares/auth.middleware.js");

router.get("/hackathons", async (req, res) => {
  try {
    res.status(200).send(hackathons.hackathons);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

router.get("/internships", async (req, res) => {
  try {
    res.status(200).send(internships.internships);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

router.get("/hiring", async (req, res) => {
  try {
    res.status(200).send(hiring.hiring);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

router.get("/workshops", async (req, res) => {
  try {
    res.status(200).send(workshops.workshops);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

router.get("/conferences", async (req, res) => {
  try {
    res.status(200).send(conferences.conferences);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

router.get("/dashboard", authMiddleware, async (req, res) => {
  const magicId = req.magicId;
  try {
    const user = await User.findOne({ magicId: magicId });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

module.exports = router;
