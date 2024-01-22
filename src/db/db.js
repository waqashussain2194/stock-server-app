const db = require('../configs/db.config');

const initializeDB = async () => {
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS stock_watchlist (
        id SERIAL PRIMARY KEY,
        symbol VARCHAR(255) NOT NULL,
        added_timestamp TIMESTAMP WITHOUT TIME ZONE DEFAULT (NOW() AT TIME ZONE 'utc')
      );
    `;
    await db.query(queryText);
  } catch (err) {
    throw err;
  }
};

module.exports = initializeDB;
