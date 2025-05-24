const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    const { email, password, confirmPassword, role } = req.body;

    // Basic validation
    if (!email.endsWith('@anurag.edu.in')) {
        return res.status(400).send('Email must belong to @anurag.edu.in domain.');
    }

    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match.');
    }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).send('User already exists.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({
            email,
            password: hashedPassword,
            role
        });

        await user.save();

        res.redirect('/signup-success.html');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid email or password.');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid email or password.');
        }

        // Set session
        req.session.user = {
            id: user._id,
            email: user.email,
            role: user.role
        };

        // Redirect based on role
        if (user.role === 'student') {
            return res.redirect('/student-dashboard.html');
        } else if (user.role === 'instructor') {
            return res.redirect('/instructor-dashboard.html');
        } else {
            return res.redirect('/index-logged-in.html');
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
