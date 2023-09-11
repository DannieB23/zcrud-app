/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('userbase').del()
  await knex('userbase').insert([
    { FirstName: 'Dannie', LastName: 'Bolden', UserName: 'DannieB', Password: 'dannie', Manager: true },
    { FirstName: 'Adam', LastName: 'Sandler', UserName: 'AdamS', Password: 'adam', Manager: true },
    { FirstName: 'Dave', LastName: 'Chappelle', UserName: 'DaveC', Password: 'dave', Manager: true },
    { FirstName: 'Chris', LastName: 'Rock', UserName: 'ChrisR', Password: 'chris', Manager: true },
  ]);
};