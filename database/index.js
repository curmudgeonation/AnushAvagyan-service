const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/host';

const db = mongoose.connect(mongoUri);

module.exports = db;
