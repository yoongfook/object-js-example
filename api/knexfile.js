const pg = require("pg");
// pg.defaults.ssl = true;

module.exports = {
  client: "pg",
  connection: "postgres://root@localhost:5432/objection-js-dev"
};
