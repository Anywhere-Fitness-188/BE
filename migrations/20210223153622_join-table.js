
exports.up = function(knex) {
    return knex.schema.createTable('join', join => {
        join.increments();
        join.integer('user_id', 255)
        .notNullable()
        .references('id')
        .inTable('users');
        join.integer('class_id', 255)
        .notNullable()
        .references('id')
        .inTable('classes')
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('join');
};
