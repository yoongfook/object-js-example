exports.seed = function(knex) {
  return knex("workspaces")
    .del()
    .then(function() {
      return knex("workspaces").insert([
        { id: 1, intercomAppId: "wxyx", braintreeApiKey: "ababab" },
        { id: 2, intercomAppId: "abcd", braintreeApiKey: "bcbcbc" },
        { id: 3, intercomAppId: "tyui", braintreeApiKey: "nmnmnm" }
      ]);
    });
};
