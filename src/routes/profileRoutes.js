const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../middlewares/authMiddleware');
const {
    getProfile,
    getEditProfile,
    updateProfile,
    postEditProfile,
    getEditAccount,
    postEditAccount,
    sendOtpToEmail,
    validateOtp,
    changePassword
} = require('../controllers/profileController');
const Profile = require('../models/Profile');



router.get('/profile', ensureAuthenticated, getProfile);
router.get('/profile/edit', ensureAuthenticated, getEditProfile);
router.post('/profile/edit', ensureAuthenticated, updateProfile);
router.post('/edit', ensureAuthenticated, postEditProfile);
router.get('/edit-account', ensureAuthenticated, getEditAccount);
router.post('/edit-account', ensureAuthenticated, postEditAccount);
router.post('/send-otp', ensureAuthenticated, sendOtpToEmail);
router.post('/validate-otp', ensureAuthenticated, validateOtp);
router.post('/change-password', ensureAuthenticated, changePassword);
router.get('/api/instructor/profile', ensureAuthenticated, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user_id: req.session.user.id });

        if (!profile) {
            return res.json({ profileName: 'Anonymous Instructor', aboutYou: 'No profile information available.' });
        }

        res.json({
            profileName: profile.profileName || 'Anonymous Instructor',
            aboutYou: profile.aboutYou || 'No profile information available.'
        });
    } catch (err) {
        console.error('Profile fetch error:', err);
        res.status(500).json({ error: 'Failed to load profile' });
    }
});


module.exports = router;
