const path = require('path');

const express = require('express');

const app = express();

const router = express.Router();

router.get('/users', (req, res, next) => {
  // console.log(__dirname);
  res.sendFile(path.join(__dirname, '../', 'views', 'users.html'));
});

module.exports = router;
