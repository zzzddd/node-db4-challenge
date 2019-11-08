
exports.up = function(knex) {
  return knex.schema
    .createTable("ingrediants", tbl => {
      // the type of the Primary Key is: integer without negative values, also called unsigned
      tbl.increments();

      tbl.string("name", 255).notNullable();
    })
    .createTable("recipis", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();
      tbl.string("description", 255).notNullable();
    })
    .createTable("instructions", tbl => {
      tbl.increments();

      tbl.string("instruction", 255).notNullable();
      tbl.integer("stepno");

      // define Foreign Key
      tbl
        .integer("recipi_id")
        .unsigned()
        .references("id")
        .inTable("recipis")
        .onDelete("RESTRICT") // about deleting the record from the primary key table. Could be 'RESTRICT', 'NO ACTION', 'SET NULL'
        .onUpdate("CASCADE"); // about changing the value of the primary key table.
    })
    .createTable("recipi_ingrediant", tbl => {
      tbl.increments();

      tbl
        .integer("ingredent_id")
        .unsigned()
        .references("id")
        .inTable("ingrediants")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("recipi_id")
        .unsigned()
        .references("id")
        .inTable("recipis")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

    //   tbl.date("from").notNullable();
    //   tbl.date("to");
    });
};

exports.down = function(knex) {
  // drop tables in reverse order when using foreign keys
  return knex.schema
    .dropTableIfExists("ingrediants")
    .dropTableIfExists("recipis")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipi_ingrediant");
};

// knex ... command not found: knex -> npx knex ... or install knex globally with npm i -g knex