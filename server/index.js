const express = require("express");
const cors = require("cors");
require("dotenv").config();
const conn = require("./db");
const allRoutes = require("./routes/all.route.js");
const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api", allRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

//default route
app.get("/", (req, res) => {
  res.send("Welcome to Student-helper server v1.0.0!");
});

// Connection to database and starting the express server
conn().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running on port: " + process.env.PORT);
  });
});