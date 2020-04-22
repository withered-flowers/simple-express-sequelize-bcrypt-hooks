'use strict';
const bcrypt = require('bcrypt');
const saltRound = 10;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    pass: DataTypes.STRING
  }, {});
  
  User.associate = function(models) {
    // associations can be defined here
  };

  // Jadi ceritanya:
  // 1. Pada saat insert ke db, password akan diinput dengan bcrypt
  // 2. Pada saat query db, kita akan compare si input user dengan hash nya sama gak.

  // Di sini kita akan gunakan hook untuk bcrypt
  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.pass, saltRound)
      .then(hashedPassword => {
        user.pass = hashedPassword;
      })
      .catch(err => {
        throw err;
      });
  });

  // Disini kita bikin 1 fungsi untuk mengecek password
  User.prototype.validPassword = (passwordInput, passwordOnDB) => {
    return bcrypt.compareSync(passwordInput, passwordOnDB);
  }

  return User;
};