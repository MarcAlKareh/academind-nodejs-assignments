const path = require('path');

const express = require('express');

const app = express();

const usersRouter = require('./routes/users');
const mainRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRouter);
app.use(mainRouter);

app.listen(3000);
