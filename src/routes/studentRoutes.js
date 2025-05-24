const express = require('express');
const router = express.Router();
const { getStudentProfile , getAllStudents } = require('../controllers/studentController');
const ensureAuthenticated = require('../middlewares/authMiddleware');

router.get('/students', ensureAuthenticated, getAllStudents);
router.get('/students/:id', ensureAuthenticated, getStudentProfile);

module.exports = router;
