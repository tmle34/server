const mongoose = require('mongoose'),
  url = 'mongodb://127.0.0.1:27017',
  dbName = 'Users',
  connectionString = url + '/' + dbName;

mongoose.connect(connectionString);
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));