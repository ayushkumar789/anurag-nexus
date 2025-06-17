const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../middlewares/authMiddleware');
const instructorController = require('../controllers/instructorController');
const upload = require('../middlewares/uploadMiddleware');
const categoryController = require('../controllers/categoryController');
const Category = require('../models/Category');
const Course = require('../models/Course');
const mongoose = require('mongoose');

router.get('/instructor/courses', ensureAuthenticated, instructorController.getInstructorCourses);
router.get('/instructor/add-course', ensureAuthenticated, instructorController.getAddCoursePage);
router.post('/instructor/add-course', ensureAuthenticated, instructorController.addCourse);
// Category Management - accessible to instructors/admins
router.get('/categories', ensureAuthenticated, categoryController.getAllCategories);
router.post('/categories', ensureAuthenticated, categoryController.addCategory);
router.post('/categories/delete/:id', ensureAuthenticated, categoryController.deleteCategory);
// JSON endpoint to get categories
router.get('/instructor/categories-json', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});
router.get('/instructor/edit-course/:id', ensureAuthenticated, instructorController.getEditCoursePage);
router.post('/instructor/update-course/:id', ensureAuthenticated, instructorController.updateCourse);
router.get('/instructor/api/course/:id', ensureAuthenticated, instructorController.getCourseJson);
router.get('/api/courses-by-category', async (req, res) => {
    try {
        // Populate instructor from User collection
        const courses = await Course.find().populate('instructorId', 'name');

        const grouped = {};

        courses.forEach(course => {
            const categoryName = course.category?.name || 'Uncategorized';
            if (!grouped[categoryName]) grouped[categoryName] = [];

            grouped[categoryName].push({
                id: course._id,
                courseName: course.name,
                instructorName: course.instructorId?.name || 'Instructor',
                description: course.description || 'No description provided',
                imagePath: course.imagePath || '/assets/images/courses-default.png',
                duration: course.duration || 'N/A'
            });
        });

        res.json(grouped);
    } catch (err) {
        console.error('Error fetching courses by category:', err);
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});

// Fetch logged-in instructor's courses for dashboard
router.get('/api/instructor/my-courses', ensureAuthenticated, async (req, res) => {
    try {

        const instructorId = new mongoose.Types.ObjectId(req.session.user.id);

        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        const skip = (page - 1) * limit;
        console.log("Session User ID:", req.session.user.id);
        console.log("Type of User ID:", typeof req.session.user.id);
        console.log("Raw ID from session:", req.session.user.id);
        console.log("Type:", typeof req.session.user.id);

        const totalCourses = await Course.countDocuments({ instructorId });
        const courses = await Course.find({ instructorId })
            .skip(skip)
            .limit(limit);

        const totalPages = Math.ceil(totalCourses / limit);

        res.json({
            courses: courses,
            currentPage: page,
            totalPages
        });
    } catch (err) {
        console.error("Error fetching instructor courses:", err);
        res.status(500).json({ error: 'Failed to fetch instructor courses' });
    }
});

// GET: Instructor profile details by session user ID
router.get('/api/instructor/profile', ensureAuthenticated, async (req, res) => {
    const Profile = require('../models/Profile');
    const mongoose = require('mongoose');

    try {
        const profile = await Profile.findOne({
            user_id: new mongoose.Types.ObjectId(req.session.user.id)
        });

        if (!profile) {
            return res.json({
                profileName: 'Anonymous Instructor',
                aboutYou: 'No profile information available.'
            });
        }

        res.json({
            profileName: profile.profileName || 'Anonymous Instructor',
            aboutYou: profile.aboutYou || 'No profile information available.'
        });

    } catch (err) {
        console.error('Instructor profile error:', err);
        res.status(500).json({ error: 'Failed to load profile' });
    }
});


module.exports = router;
