const Student = require('../models/Student');

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

