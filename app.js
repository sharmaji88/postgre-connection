// app.js

const { query } = require('./db');  // import the query function from db.js

const getUsers = async () => {
  try {
    const users = await query('SELECT * FROM users');
    console.log(users);
  } catch (err) {
    console.error('Error fetching users:', err);
  }
};


const createUsers = async () => {
    try {
      await query(`INSERT INTO users (id,name, email, age) VALUES (3,'demo', 'demo@example.com', 57)`);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };


// createUsers();
// Run the function to get all users
// getUsers();
