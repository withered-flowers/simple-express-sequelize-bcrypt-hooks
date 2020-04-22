'use strict';
module.exports = (sequelize, DataTypes) => {
  const Anime = sequelize.define('Anime', {
    title: DataTypes.STRING,
    episodes: DataTypes.STRING,
    url: DataTypes.STRING,
    // Nambahin data baru
    season_id: DataTypes.INTEGER
  }, {});
  Anime.associate = function(models) {
    // Banyak Anime tergabung dalam 1 Season, jadinya pakai belongsTo
    // Kalau relasinya 1-to-1, pakai hasOne
    Anime.belongsTo(models.Season, {
      foreignKey: 'season_id'
    });
  };
  return Anime;
};