const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(__dirname + '/dist')); 


app.listen(PORT, () => {
  console.log(`Мой сервер запускается на ${PORT} порту!`);
});