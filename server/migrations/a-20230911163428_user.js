/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('userbase', (table) => {
        table.increments('id').primary();
        table.string('FirstName', 256).notNullable();
        table.string('LastName', 256).notNullable();
        table.string('UserName', 256).notNullable();
        table.string('Password', 256).notNullable();
        table.boolean('Manager').defaultTo(true);

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('userbase');
};
