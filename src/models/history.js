var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var historySchema = new Schema({
  owner_id: { type: String, required: true},
  history: { type: String, required: true},
  created_at: Date,
  updated_at: Date
});

historySchema.pre('update', function (next) {
  this.updated_at =  new Date();
  next();
});

historySchema.pre('create', function (next) {
  this.created_at =  new Date();
  next();
});

var history = mongoose.model('HistoryEntry', historySchema);

module.exports = history;
