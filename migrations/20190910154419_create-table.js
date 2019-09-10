
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()
      tbl.text('VIN')
        .notNullable()
      tbl.text('make')
        .notNullable()
      tbl.text('model')
        .notNullable()
      tbl.text('mileage')
        .notNullable()  
      tbl.text('transmission type')
        
      tbl.text('status of title')
       
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
