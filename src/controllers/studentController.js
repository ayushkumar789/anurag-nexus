const Student = require('../models/Student');
const Course = require('../models/Course');


exports.getStudentProfile = async (req, res) => {
    const studentId = req.params.id;

    try {
        const student = await Student.findById(studentId);
        if (!student) return res.status(404).json({ message: 'Student not found' });

        res.json({
            name: student.name,
            aboutYou: "This is a student profile from Anurag Nexus.", // Add real fields later
            department: student.department,
            phone: student.phone,
            address: student.address
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('user_id');
        const data = students.map(student => ({
            _id: student._id,
            name: student.name,
            email: student.user_id.email,
            department: student.department,
            phone: student.phone
        }));
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getMyCourses = async (req, res) => {
    try {
        const userId = req.session.user._id;
        const courses = await Course.find({ enrolledStudents: userId });

        res.json(courses.map(course => ({
            _id: course._id,
            name: course.name,
            instructorName: course.instructorName,
            category: course.category
        })));
    } catch (err) {
        console.error('Error fetching enrolled courses:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

