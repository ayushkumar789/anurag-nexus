const User = require('../models/User');
const Student = require('../models/Student');
const Instructor = require('../models/Instructor');
const Profile = require('../models/Profile');

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

exports.getEditProfile = async (req, res) => {
    try {
        const userId = req.session.userId;
        const profile = await Profile.findOne({ user_id: userId });

        if (!profile) return res.status(404).json({ error: 'Profile not found' });

        res.json({
            profileName: profile.profileName,
            aboutYou: profile.aboutYou,
            displayRealName: profile.displayRealName,
            isPublicProfile: profile.isPublicProfile
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.postEditProfile = async (req, res) => {
    try {
        const userId = req.session.userId;
        const { profileName, aboutYou, displayRealName, isPublicProfile } = req.body;

        const updatedProfile = await Profile.findOneAndUpdate(
            { user_id: userId },
            {
                profileName,
                aboutYou,
                displayRealName,
                isPublicProfile
            },
            { new: true, upsert: true }
        );

        res.json({ message: 'Profile updated successfully', profile: updatedProfile });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateAccountDetails = async (req, res) => {
    try {
        const userId = req.session.userId;
        const {
            firstName,
            lastName,
            phoneNumber,
            address,
            dateOfBirth,
            department
        } = req.body;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Update basic profile (if exists)
        await Profile.findOneAndUpdate(
            { userId },
            { phone: phoneNumber, address },
            { upsert: true, new: true }
        );

        if (user.role === 'STUDENT') {
            await Student.findOneAndUpdate(
                { userId },
                { name: `${firstName} ${lastName}`, dob: dateOfBirth },
                { new: true }
            );
        } else if (user.role === 'INSTRUCTOR') {
            await Instructor.findOneAndUpdate(
                { userId },
                { name: `${firstName} ${lastName}`, specialization: department },
                { new: true }
            );
        }

        return res.json({ success: true, message: 'Account updated successfully.' });
    } catch (err) {
        console.error('Update Account Error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.getEditAccount = async (req, res) => {
    try {
        const userId = req.session.user._id;
        const user = await User.findById(userId).lean();
        const profile = await Profile.findOne({ userId }).lean();
        const role = req.session.user.role;

        let extra = {};
        if (role === 'STUDENT') {
            const student = await Student.findOne({ userId }).lean();
            if (student) extra.dateOfBirth = student.dob;
        } else if (role === 'INSTRUCTOR') {
            const instructor = await Instructor.findOne({ userId }).lean();
            if (instructor) extra.department = instructor.specialization;
        }

        return res.json({
            firstName: user.name?.split(' ')[0] || '',
            lastName: user.name?.split(' ')[1] || '',
            email: user.email,
            phoneNumber: profile?.phone || '',
            address: profile?.address || '',
            role,
            ...extra
        });
    } catch (err) {
        console.error('Error loading account:', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

exports.postEditAccount = async (req, res) => {
    try {
        const userId = req.session.user._id;
        const {
            firstName,
            lastName,
            phoneNumber,
            address,
            dateOfBirth,
            department
        } = req.body;

        const fullName = `${firstName} ${lastName}`;
        const role = req.session.user.role;

        await User.findByIdAndUpdate(userId, { name: fullName });

        await Profile.findOneAndUpdate(
            { userId },
            { phone: phoneNumber, address },
            { upsert: true, new: true }
        );

        if (role === 'STUDENT') {
            await Student.findOneAndUpdate(
                { userId },
                { dob: dateOfBirth },
                { upsert: true }
            );
        } else if (role === 'INSTRUCTOR') {
            await Instructor.findOneAndUpdate(
                { userId },
                { specialization: department },
                { upsert: true }
            );
        }

        return res.json({ success: true });
    } catch (err) {
        console.error('Error updating account:', err);
        return res.status(500).json({ error: 'Server error' });
    }
};

exports.sendOtpToEmail = async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        const otp = Math.floor(100000 + Math.random() * 900000);
        user.otp = otp;
        user.otpExpires = Date.now() + 10 * 60 * 1000; // 10 min
        await user.save();

        console.log(`🔐 OTP sent to ${user.email}: ${otp}`);
        res.status(200).json({ message: 'OTP sent to your email (simulated).' });
    } catch (err) {
        console.error('Error sending OTP:', err);
        res.status(500).json({ error: 'Failed to send OTP' });
    }
};

exports.validateOtp = async (req, res) => {
    const { otp } = req.body;

    try {
        const user = await User.findById(req.session.user._id);

        if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        // Clear OTP
        user.otp = null;
        user.otpExpires = null;
        await user.save();

        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (err) {
        console.error('OTP verification failed:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

const bcrypt = require('bcryptjs');


exports.changePassword = async (req, res) => {
    const userId = req.user.id;
    const { newPassword, confirmPassword } = req.body;

    if (!newPassword || !confirmPassword) {
        return res.status(400).json({ error: 'Both fields are required.' });
    }

    if (newPassword !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await User.findByIdAndUpdate(userId, { password: hashedPassword });
        res.status(200).json({ message: 'Password updated successfully.' });
    } catch (err) {
        console.error('Error updating password:', err);
        res.status(500).json({ error: 'Internal server error.' });
    }
};