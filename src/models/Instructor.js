const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    specialization: String,
    experience: Number
});

module.exports = mongoose.model('Instructor', instructorSchema);
