const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// Database
const db = require('./config/database')
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// App
const app = express();

app.use(cors())
app.options('*', cors());

// Gig routes
app.use('/api/gigs', require('./routes/gigs'));

app.listen(PORT, HOST);
console.log(`Server running on http://${HOST}:${PORT}`);

