const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    profileName: String,
    aboutYou: String,
    displayRealName: Boolean,
    isPublicProfile: Boolean
});

module.exports = mongoose.model('Profile', profileSchema);
