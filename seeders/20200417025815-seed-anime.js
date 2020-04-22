'use strict';
let data = require('../data/0-animeProcessed.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let objects = data.map(elem => {
      let obj = {
        id: elem.id,
        title: elem.title,
        url: elem.url,
        episodes: elem.episodes,
        season_id: elem.season_id,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      return obj;
    });

    return queryInterface.bulkInsert('Animes', objects, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Animes', null, {});
  }
};
