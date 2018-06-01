const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  }
});

teamSchema.virtual('players', {
  localField: '_id',
  foreignField: 'team',
  ref: 'Player'
});

teamSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Team', teamSchema);
