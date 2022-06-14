require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Мой сервер запускается на ${process.env.PORT || 3000} порту!`);
});
