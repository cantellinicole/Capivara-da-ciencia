const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

//Rotas
const index = require('./routes/index');
const newsRoute = require('./routes/newsRoutes');
const wppRoute = require('./routes/wppRoutes');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/news', newsRoute);
app.use('/wpp', wppRoute);


module.exports = app;