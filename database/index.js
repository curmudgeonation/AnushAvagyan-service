const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/host';

const db = mongoose.connect(mongoUri);

// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//     console.log("Connection Successful!");
// });

module.exports = db;
