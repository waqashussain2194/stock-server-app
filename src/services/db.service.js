const db = require("../configs/db.config");

async function executeQuery(query, params) {
  try {
    const res = await db.query(query, params);
    return res.rows;
  } catch (err) {
    throw new Error(`Database query failed: ${err.message}`);
  }
}

module.exports = {
  executeQuery
};
