const express = require('express');
//const booksRoute = require('./route/booksRoute');
const usersRoute = require('./route/usersRoute');
const wineRoute = require('./route/wineRoute');
const carrinhoRoute = require('./route/carrinhoRoute');
const carrinhoItemRoute = require('./route/carrinhoItemRoute');
const compraRoute = require('./route/compraRoute');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
//app.use(booksRoute);
app.use(usersRoute);
app.use(wineRoute);
app.use(carrinhoRoute);
app.use(carrinhoItemRoute);
app.use(compraRoute);
app.listen(3333);
