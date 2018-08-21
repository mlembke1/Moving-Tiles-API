exports.up = function(knex, Promise) {
    return knex.schema.createTable('tiles', function(table) {
      // TABLE COLUMN DEFINITIONS HERE
      table.increments()
      table.string('imagePath', 255).notNullable().defaultTo('')
      table.timestamps(true, true)
    })
  }
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tiles')
  }