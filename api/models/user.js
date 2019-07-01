const Knex = require("knex");
const { Model } = require("objection");
const connection = require("../knexfile");

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class User extends Model {
  static get tableName() {
    return "users";
  }
}

module.exports = {
  User
};
