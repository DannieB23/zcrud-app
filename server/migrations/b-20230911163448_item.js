/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('item', (table) => {
        table.increments('id').primary();
        table.integer('UserId').references('id').inTable('userbase');
        table.string('ItemName', 256).notNullable();
        table.string('Description', 256).notNullable();
        table.integer('Quantity').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('item');
};
