const express = require("express");
const helmet = require("helmet");
const Knex = require("knex");
const { Model } = require("objection");
const connection = require("../knexfile");
const { User } = require("../models/user");

const app = express();
app.use(helmet());

const knexConnection = Knex(connection);
Model.knex(knexConnection);

app.get("*", async (req, res) => {
  const users = await User.query().eager("workspace");

  res.set("Content-Type", "application/json");
  res.status(200).send(users);
});

module.exports = app;
