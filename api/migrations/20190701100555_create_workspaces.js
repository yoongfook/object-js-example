exports.up = function(knex) {
  return knex.schema.createTable("workspaces", table => {
    table.increments("id").primary();
    table.string("intercomAppId");
    table.string("braintreeApiKey");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("workspaces");
};
