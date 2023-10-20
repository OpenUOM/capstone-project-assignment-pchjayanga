exports.up = function (knex) {
    return knex.schema
      .createTable("teacher", function (table) {
        table.increments("id").notNullable().primary();
        table.string("name", 255);
        table.int("age");
      })
      .createTable("student", function (table) {
        table.increments("id").notNullable().primary();
        table.string("name", 255);
        table.int("age");
        table.string("hometown", 255);
      })
      .createTable("addStudent", function (table) {
        table.increments("id").notNullable().primary();
        table.string("name", 255);
        table.int("age", 255);
          table.string("religion", 255);
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable("teacher")
      .dropTable("student")
      .dropTable("addStudent")
  };
  