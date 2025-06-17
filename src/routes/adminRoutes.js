const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const ensureAuthenticated = require('../middlewares/authMiddleware');

// Admin-only: Return all courses as JSON
router.get('/admin/all-courses', ensureAuthenticated, async (req, res) => {
    try {
        const courses = await Course.find().populate('category');
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});

module.exports = router;
