const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    magicId: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    stream: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    bookmarks: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);
module.exports = User;
