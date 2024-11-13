// db.js

const { Pool } = require('pg');

// Create a new pool of connections to the PostgreSQL database
const pool = new Pool({
  user: 'admin',        // replace with the PostgreSQL username
  host: 'localhost',            // the host where PostgreSQL is running
  database: 'admin',    // replace with the database name
  password: 'admin',    // replace with the PostgreSQL password
  port: 5429,                   // PostgreSQL default port
});

// Function to query the database
const query = async (text, params) => {
  try {
    const res = await pool.query(text, params);
    console.log(res.rows,"res.rows",params);
    return res.rows;  // return the rows from the query
  } catch (err) {
    console.error('Database query error:', err.stack);
    throw err;
  }
};


// Function to close the pool of connections
const close = async () => {
  await pool.end();
};

module.exports = { query, close };
