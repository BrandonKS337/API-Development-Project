const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB connection URL from the environment variable
const dbURL = process.env.MONGODB_URI;

// Set up database connection
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});
