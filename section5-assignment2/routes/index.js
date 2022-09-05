const path = require('path');

const express = require('express');

const app = express();

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log(__dirname);
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

module.exports = router;
