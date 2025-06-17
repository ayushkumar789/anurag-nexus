const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
    title: String,
    description: String,
    videoPath: String
});

const courseSchema = new mongoose.Schema({
    name: String,
    imagePath: String,
    duration: String,  // Still keeping it as earlier
    instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { name: String },
    chapters: [ChapterSchema]
});

module.exports = mongoose.model('Course', courseSchema);
