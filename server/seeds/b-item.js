/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('item').del()
  await knex('item').insert([
    { UserId: 1, ItemName: 'Chair', Description: 'Comfy', Quantity: 3 }

  ]);
};
