const express = require('express');
const Controller = require('./controllers/controller');

const app = express();

const PORT = 3000;


// Cara untuk login dan register di sini kurang baik karena pakai query dan params
// Harusnya menggunakan POST untuk login dan req.body via FORM HTML di register

// Lihat di model user juga yah !
// Ini masih tanpa session

// Contoh URL: localhsot:3000/localhost?user=admin&pass=admin
app.get('/login', Controller.tryLogin);
app.get('/register/:user/:pass', Controller.registerUser);

app.get('/season', Controller.showSeason);
app.get('/anime', Controller.showAnime);

app.listen(PORT, () => {
  console.log(`Open in port ${PORT}`);
});