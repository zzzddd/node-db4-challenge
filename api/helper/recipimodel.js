const db = require("../../data/dbcon");

module.exports = {
  find
};

function find(id) {
  if (id) {
    return db("recipi")
      .where({ id })
      .first();
  } else {
    return db("recipi");
  }
}
