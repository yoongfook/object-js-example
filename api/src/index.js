const express = require("express");
const helmet = require("helmet");
const moment = require("moment");
const { User } = require("../models/user");

const app = express();

app.use(helmet());

app.get("*", async (req, res) => {
  const users = await User.query();

  res.set("Content-Type", "application/json");
  res.status(200).send(users);
});

module.exports = app;
