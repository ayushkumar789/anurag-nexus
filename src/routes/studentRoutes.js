const express = require('express');
const router = express.Router();
const { getStudentProfile , getAllStudents ,getMyCourses  } = require('../controllers/studentController');
const ensureAuthenticated = require('../middlewares/authMiddleware');
const Student = require('../models/Student');
const User = require('../models/User');

router.get('/students', ensureAuthenticated, getAllStudents);
router.get('/students/:id', ensureAuthenticated, getStudentProfile);
router.get('/my-courses', ensureAuthenticated, getMyCourses);
router.get('/api/students', ensureAuthenticated, async (req, res) => {
    try {
        const students = await Student.find()
            .populate('user_id', 'email') // Join with users collection for email
            .lean();

        const formatted = students.map(s => ({
            _id: s._id,
            name: s.name,
            department: s.department,
            phone: s.phone,
            email: s.user_id?.email || 'Email N/A'
        }));

        res.json(formatted);
    } catch (err) {
        console.error('Error fetching students:', err);
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});

router.get('/api/student/my-courses', async (req, res) => {
    try {
        const userId = req.session.userId;
        const role = req.session.role;

        if (!userId || role !== 'STUDENT') {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Find student record by userId
        const student = await Student.findOne({ user_id: userId });
        if (!student) return res.status(404).json({ error: 'Student not found' });

        // Fetch all courses student is enrolled in (Assuming enrollments saved in student document)
        const enrolledCourses = await Course.find({ _id: { $in: student.enrolledCourses || [] } });

        const formattedCourses = enrolledCourses.map(course => ({
            _id: course._id,
            name: course.name,
            instructorName: 'Instructor', // Hardcoded unless populated
            category: course.category?.name || 'Uncategorized'
        }));

        res.json(formattedCourses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch enrolled courses' });
    }
});

router.post('/api/student/enroll', async (req, res) => {
    try {
        const userId = req.session.userId;
        const { courseId } = req.body;

        if (!userId || !courseId) {
            return res.status(400).json({ error: 'Missing student session or course ID.' });
        }

        const student = await Student.findOne({ user_id: userId });
        if (!student) {
            return res.status(404).json({ error: 'Student not found.' });
        }

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found.' });
        }

        // Check if already enrolled
        if (student.enrolledCourses.includes(courseId)) {
            return res.status(400).json({ error: 'Already enrolled in this course.' });
        }

        // Add course
        student.enrolledCourses.push(courseId);
        await student.save();

        res.json({ message: 'Successfully enrolled in course.' });
    } catch (err) {
        console.error('Enrollment error:', err);
        res.status(500).json({ error: 'Enrollment failed.' });
    }
});

module.exports = router;
