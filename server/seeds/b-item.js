/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('item').del()
  await knex('item').insert([
    {
      UserId: 1,
      ItemName: 'Richard Pryor Here And Now',
      Description: 'New Orleans Saenger Theater hosts high-octane comic Richard Pryor in his prime, covering everything from politics to sex and drugs.',
      Quantity: 3
    },
    {
      UserId: 2,
      ItemName: 'George Carlin: Back in Town',
      Description: 'George Carlins unique socio-political critique takes center stage as he takes on America, from the antics of the elite to everyday annoyances.',
      Quantity: 5
    },
    {
      UserId: 3,
      ItemName: 'Eddie Murphy: Raw',
      Description: 'Eddie Murphy brings his razor-sharp wit in this concert film, tackling everything from childhood to Hollywood and African culture.',
      Quantity: 3
    },
    {
      UserId: 4,
      ItemName: 'Ali Wong: Hard Knock Wife',
      Description: 'Two years after "Baby Cobra," Ali Wong is back with another baby bump and a torrent of hilarious truths about marriage and motherhood.',
      Quantity: 6
    },
    {
      UserId: 1,
      ItemName: 'Dave Chappelle: Sticks & Stones',
      Description: 'Dave Chappelle takes on gun culture, the opioid crisis, and the tidal wave of celebrity scandals in a defiant stand-up special.',
      Quantity: 7
    },
    {
      UserId: 2,
      ItemName: 'Tina Fey: One Night Stand',
      Description: 'Tina Fey returns to the stage with a hilarious view on career, motherhood, and the absurdities of life.',
      Quantity: 5
    },
    {
      UserId: 3,
      ItemName: 'John Mulaney: Kid Gorgeous',
      Description: 'John Mulaney relays stories from his childhood, eviscerating the value of college, and laments getting older in this hilarious stand-up special.',
      Quantity: 2
    },
    {
      UserId: 2,
      ItemName: 'Kevin Hart: Let Me Explain',
      Description: 'Kevin Hart gets real about his cheating scandals, celebrity friendships, and personal connection with fans.',
      Quantity: 3
    }
  ]);
};
