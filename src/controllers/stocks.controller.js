const stockSevice = require('../services/stocks.service');

async function getAllWatchList(req, res, next) {
  try {
    res.json(await stockSevice.getAllWatchList());
  } catch (err) {
    next(err);
  }
}

async function getAllStocks(req, res, next) {
  try {
    res.json(await stockSevice.getAllStocks());
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await stockSevice.create(req.body.symbol));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllWatchList,
  getAllStocks,
  create
};
