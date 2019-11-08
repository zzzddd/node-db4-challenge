
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipis")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipis").insert([
        {  colName: "rowValue1" },
        {  colName: "rowValue2" },
        {  colName: "rowValue3" }
      ]);
    });
};
