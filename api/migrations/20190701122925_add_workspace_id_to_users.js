exports.up = function(knex) {
  return knex.schema.table("users", table => {
    table.string("workspaceId");
  });
};

exports.down = function(knex) {
  return knex.schema.table("users", function(table) {
    table.dropColumn("workspaceId");
  });
};
