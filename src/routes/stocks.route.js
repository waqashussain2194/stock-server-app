const express = require('express');
const router = express.Router();
const stocksController = require('../controllers/stocks.controller');

/* GET - fetch watchlist stocks */
router.get('/watchlist', stocksController.getAllWatchList);

/* GET - fetch all stocks */
router.get('/', stocksController.getAllStocks);
  
/* POST - save stock symbol in database*/
router.post('/', stocksController.create);

module.exports = router;
