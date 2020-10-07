
exports.up = function(knex) {
  return knex.schema.createTable('car_info', tbl => {
    tbl.string('VIN').primary();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.integer('miles').notNullable();

    tbl.string('transmission');
    tbl.string('titleStatus');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car_info');
};
