exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, email: "john@beaconmaker.com", name: "John Beaconmaker" },
        { id: 2, email: "john.kueh@gmail.com", name: "John Kueh" },
        { id: 3, email: "john@zibbet.com", name: "John Zibbet" }
      ]);
    });
};
