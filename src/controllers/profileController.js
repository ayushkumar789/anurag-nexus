const User = require('../models/User');

exports.getProfile = async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const user = await User.findById(req.session.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({
            name: user.email.split('@')[0], // Later can be user.name
            aboutYou: "I’m currently a student at Anurag University passionate about tech!" // Replace with real field when needed
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const Profile = require('../models/Profile');

exports.getEditProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user_id: req.session.user.id });
        res.json(profile || {});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateProfile = async (req, res) => {
    const { profileName, aboutYou, displayRealName, isPublicProfile } = req.body;

    try {
        let profile = await Profile.findOne({ user_id: req.session.user.id });
        if (!profile) {
            profile = new Profile({ user_id: req.session.user.id });
        }

        profile.profileName = profileName;
        profile.aboutYou = aboutYou;
        profile.displayRealName = displayRealName;
        profile.isPublicProfile = isPublicProfile;

        await profile.save();
        res.json({ message: 'Profile updated' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

