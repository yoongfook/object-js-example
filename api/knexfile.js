module.exports = {
  development: {
    client: "pg",
    connection: { user: "root", database: "objection-js-dev" }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
