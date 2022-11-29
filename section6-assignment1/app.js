const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const names = [];

app.get('/', (req, res, next) => {
  res.render('form', { pageTitle: 'Enter Name' });
});

app.get('/users', (req, res, next) => {
  res.render('users', { pageTitle: 'Names', user_names: names });
});

app.post('/add-name', (req, res, next) => {
  const name = req.body.name;
  names.push(name);
  res.redirect('/users');
});

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
