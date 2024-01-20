const axios = require('axios');
const { executeQuery } = require('./db.service');

async function getAllWatchList() {
  try {
    const options = {
      method: 'GET',
      url: process.env.STOCKS_API_URL,
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.STOCKS_API_HOST,
      },
    };
    const response = await axios.request(options);
    const query = 'SELECT symbol FROM stock_watchlist';
    const dbSymbols = await executeQuery(query, []);
    const symbolList = dbSymbols.map(row => row.symbol);
    const filteredStocks = response.data.filter(stock => symbolList.includes(stock.symbol));
    return filteredStocks;
  } catch (error) {
    next(err);
  }

}

async function getAllStocks() {
  try {
    const options = {
      method: 'GET',
      url: process.env.STOCKS_API_URL,
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.STOCKS_API_HOST,
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    next(err);
  }
  
}

async function create(stockSymbol){
  const query = `
    INSERT INTO stock_watchlist (symbol) 
    VALUES ($1) 
    RETURNING *;
  `;
  const values = [stockSymbol];

  try {
    const res = await executeQuery(query, values);
    return res[0];
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllWatchList,
  getAllStocks,
  create
}
