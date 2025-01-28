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

const queryData = async (keyword) => {
  try {
    const sql = `select "desc" from question where searchme @@ plainto_tsquery($1) order by ts_rank(searchme, plainto_tsquery($1))`;
    const result = await pool.query(sql, [keyword]);
    console.log(`Number of records found: ${result.rowCount}`);
    console.log("Data:", result.rows);

    return result.rows;
  } catch (e) {
    console.error("Database query error:", e.message);
    return e;
  }
};

module.exports = { queryData };

// -- select keyword,"desc" from question where to_tsvector(keyword || ' ' || "desc") @@to_tsquery('electric');

// -- alter table question add column searchme tsvector generated always as (to_tsvector('english',coalesce(keyword,'') || ' ' || coalesce("desc", ''))) stored;

// -- select "desc"
// -- from question
// -- where searchme @@ plainto_tsquery('electric')
// -- order by ts_rank(searchme, plainto_tsquery('electric'));

//  select "desc" from question where searchme @@ to_tsquery('electric');
