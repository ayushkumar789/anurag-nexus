const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
    department: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    enrolledCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
