
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(tbl) {
      tbl.increments()
      
      tbl.string('VIN', 128).notNullable(),
      tbl.string('make', 128).notNullable(),
      tbl.string('model', 128).notNullable(),
      tbl.string('mileage', 128).notNullable(),
      tbl.string('transmission type', 128),
      tbl.string('status of the title', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
