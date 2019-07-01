exports.up = function(knex) {
  return knex.schema.createTable("workspaces", table => {
    table.increments("id").primary();
    table.string("intercom_app_id");
    table.string("braintree_api_key");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("workspaces");
};
