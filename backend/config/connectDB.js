const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  ssl: {
    rejectUnauthorized: false, // For hosted databases that require SSL
  },
});

const queryData = async () => {
  try {
    const sql = "SELECT * from question LIMIT 10;";
    const result = await pool.query(sql);
    console.log(`Number of records found: ${result.rowCount}`);
    console.log("Data:", result.rows);
  } catch (e) {
    console.error(e);
  } finally {
    await pool.end();
  }
};

module.exports = { queryData };
