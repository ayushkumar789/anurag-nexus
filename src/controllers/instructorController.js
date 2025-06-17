const path = require('path');
const Course = require('../models/Course');
const User = require('../models/User');
const Category = require('../models/Category');
const fs = require('fs');
const mongoose = require('mongoose');

const ITEMS_PER_PAGE = 8;

exports.getInstructorCourses = async (req, res) => {
    try {
        const userId = req.session.user._id;
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * ITEMS_PER_PAGE;

        const totalCourses = await Course.countDocuments({ instructorId: userId });
        const instructorCourses = await Course.find({ instructorId: userId })
            .skip(skip)
            .limit(ITEMS_PER_PAGE)
            .lean();

        const totalPages = Math.ceil(totalCourses / ITEMS_PER_PAGE);

        res.sendFile(path.join(__dirname, '..', '..', 'public', 'instructor-courses.html'));


    } catch (error) {
        console.error('Error fetching instructor courses:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.getAddCoursePage = async (req, res) => {
    try {
        const categories = await Category.find().lean();
        res.sendFile(path.join(__dirname, '../public/instructor-add-course.html'));
        // 👆 We're still serving the static HTML
        // The dropdown will be populated using JS from `/api/instructor/categories-json`
    } catch (err) {
        res.status(500).send('Error loading course form');
    }
};




exports.addCourse = async (req, res) => {
    try {
        const { courseTitle, courseDescription, courseCategory, courseDuration } = req.body;
        const instructorId = new mongoose.Types.ObjectId(req.session.user.id);

        // Handle course image upload
        let courseImagePath = '';
        if (req.files && req.files.courseImage) {
            const image = req.files.courseImage;
            const fileName = `${Date.now()}_${image.name}`;
            const uploadDir = path.join(__basedir, 'public', 'uploads', 'courses');

            if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

            const uploadPath = path.join(uploadDir, fileName);
            await image.mv(uploadPath);

            courseImagePath = `/uploads/courses/${fileName}`;
        }

        // Handle chapters
        const chapters = [];
        let index = 1;
        while (req.body[`chapterTitle_${index}`]) {
            const title = req.body[`chapterTitle_${index}`];
            const description = req.body[`chapterDescription_${index}`];
            let videoPath = '';

            if (req.files && req.files[`chapterVideo_${index}`]) {
                const video = req.files[`chapterVideo_${index}`];
                const fileName = `${Date.now()}_${video.name}`;
                const videoDir = path.join(__basedir, 'public', 'uploads', 'videos');

                if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

                const fullPath = path.join(videoDir, fileName);
                await video.mv(fullPath);

                videoPath = `/uploads/videos/${fileName}`;
            }

            chapters.push({ title, description, videoPath });
            index++;
        }

        // Save course to DB
        const newCourse = new Course({
            name: courseTitle,
            description: courseDescription,
            duration: courseDuration,
            imagePath: courseImagePath,
            instructorId,
            category: { name: courseCategory },
            chapters
        });

        await newCourse.save();
        res.redirect('/instructor/courses');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding course');
    }
};



exports.getEditCoursePage = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).send('Course not found');

        res.sendFile(path.join(__dirname, '../public/instructor-edit-course.html')); // Static HTML used
    } catch (err) {
        res.status(500).send('Error loading course');
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const { courseName, description, videoUrl } = req.body;
        await Course.findByIdAndUpdate(req.params.id, {
            name: courseName,
            description,
            videoUrl
        });
        res.redirect('/instructor/courses');
    } catch (err) {
        res.status(500).send('Error updating course');
    }
};

exports.getCourseJson = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load course' });
    }
};
