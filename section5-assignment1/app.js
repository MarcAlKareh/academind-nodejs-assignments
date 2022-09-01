const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  res.send('<h1>Hello from the "users" page</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from express</h1>');
});

// app.use((req, res, next) => {
//   console.log('In the first middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('In the second middleware');
//   res.send('<h1>Hello from the second middleware</h1>');
// });

app.listen(3000);
