const express = require('express');
const router = express.Router();
const knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('tiles')
  .then(tile => {
    res.json(tile)
  })
});

module.exports = router;
