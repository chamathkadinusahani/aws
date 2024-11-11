const express = require('express'); 
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs'); // Import bcryptjs for password hashing

const app = express();

// Middleware
app.use(cors()); // Allow requests from different origins (frontend)
app.use(express.json()); // Parse incoming JSON requests

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'sqluser1', // Your MySQL username
  password: 'password', // Your MySQL password
  database: 'Frithcode3', // Your MySQL database name
  port: 3306
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Welcome Route
app.get('/api/register', (req, res) => {
  res.send('Welcome to the Registration API');
});

// Handle Registration (POST request for /api/register)
app.post('/api/register', async (req, res) => {
  const { fullname, email, username, password } = req.body;

  // Check if any fields are missing
  if (!fullname || !email || !username || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds (recommended value)

    // Insert the user into the database with the hashed password
    const query = 'INSERT INTO sqluser1 (fullname, email, username, password) VALUES (?, ?, ?, ?)';
    db.query(query, [fullname, email, username, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error inserting data into the database:', err);
        return res.status(500).json({ success: false, message: 'Registration failed' });
      }

      res.json({ success: true, message: 'Registration successful' });
    });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/api/login', (req, res) => {
  res.send('Welcome to the login API');
});

// Handle Login (POST request for /api/login)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check if both username and password are provided
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required' });
  }

  // Query the database to find the user
  const query = 'SELECT * FROM sqluser1 WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const user = results[0];

    // Compare the provided password with the stored hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Invalid username or password' });
      }

      // If passwords match, login is successful
      res.json({ success: true, message: 'Login successful' });
    });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
