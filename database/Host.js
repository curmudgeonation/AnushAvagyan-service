const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const hostSchema = new mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  name: String,
  reviews: {type: Number, default: 0},
  verified: Boolean,
  superhost: Boolean,
  superhostIcon: String,
  coHost: [Number],
  duringStay: String,
  description: String,
  location: String,
  provided: {
    email: {type: Boolean, default: false},
    phone: {type: Boolean, default: false},
    id: {type: Boolean, default: false}
  },
  joined_at: Date,
  languages: String,
  responseTime: String,
  responseRate: {type: Number, max: 100, default: 100},
  avatarUrl: String
});

const Host = mongoose.model('Host', hostSchema);

module.exports = Host;