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
  joined_at: Date,
  languages: String,
  responseTime: String,
  responseRate: {type: Number, max: 100, default: 100},
  avatarUrl: String
},
  {
    timestamps: true
  }
);

const Host = mongoose.model('Host', hostSchema);

module.exports = Host;