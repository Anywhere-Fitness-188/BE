
exports.up = function(knex) {
    return knex.schema.createTable('classes', classes => {
        classes.increments();
        classes.string('name', 255).notNullable();
        classes.string('start_time', 255).notNullable();
        classes.string('duration', 255);
        classes.string('intensity_level', 255);
        classes.string('location', 255);
        classes.integer('attendees', 255);
        classes.integer('max_attendees', 255);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('classes');
};
