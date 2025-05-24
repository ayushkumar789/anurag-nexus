const express = require('express');
const router = express.Router();
const { getProfile,getEditProfile, updateProfile  } = require('../controllers/profileController');
const ensureAuthenticated = require('../middlewares/authMiddleware');

router.get('/profile', ensureAuthenticated, getProfile);
router.get('/profile/edit', ensureAuthenticated, getEditProfile);
router.post('/profile/edit', ensureAuthenticated, updateProfile);

module.exports = router;
