Cara menggunakan:
1. npm install
2. rename file connection/config.js.example menjadi connection/config.js
3. masukkan konfig database
4. npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
5. jalankan aplikasi npx nodemon app.js
6. Simulasi register user: localhost:3000/register/username/password
7. Simulai login user: localhost:3000/login?user=username&pass=password
8. List of Season: localhost:3000/season
9. List of Anime with Season Information: localhost:3000/anime 