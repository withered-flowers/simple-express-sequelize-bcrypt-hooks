const Op = require('sequelize').Op;

const ModelAll = require('../models/index');


class Controller {
  static showSeason(req, res) {
    ModelAll.Season.findAll({})
      .then((data) => { res.json(data); })
      .catch((err) => { res.end(err); });
  }

  static showAnime(req, res) {
    ModelAll.Anime.findAll({
      include: ModelAll.Season
    })
      .then((data) => { res.json(data); })
      .catch((err) => { res.end(err); });
  }

  static tryLogin(req, res) {
    // Kalau dari form, pakainya req.body
    // Kalau dari req.query / req.params (ga disarankan karena ini untuk username, 
    // masa keliatan di query / endpoint?)
    // Tapi untuk pembelajaran kali ini pakainya req.query yah.

    // Ini intuk validasi tambahan aja kl pakai req.body
    // if(req.body != null || req.body != undefined) {
    
    
    // Karena kita pakai req.query, validasinya di sini
    if(req.query.user != null && req.query.pass != null) {
      ModelAll.User.findOne({
        where: {
          name: req.query.user
        }
      })
      .then(user => {
        // Ga ketemu
        if(!user) {
          res.end("Salah Username / Password - 1");
        }
        // Kalau salah password
        else if(! user.validPassword(req.query.pass, user.pass)) {
          res.end("Salah username / Password - 2");
        }
        else {
        // Berhasil masuk !
        // Habis ini gunakan session
          res.end("Berhasil Login !");
        }
      })
    }
    else {
    
    // Ini juga harusnya dalam res.render supaya ada tampilan yah !
      res.send("Kurang data user dan pass !");
    }
    // }
  }


  static registerUser(req, res) {
    const user = req.params.user;
    const pass = req.params.pass;

    console.log(user);

    ModelAll.User.create({
      name: user,
      pass: pass
    })
    .then(data => {
      res.end("Berhasil nambah !")
    })
    .catch(err => {
      res.end(err.stack);
    })
  }
}

module.exports = Controller;