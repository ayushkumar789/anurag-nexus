const express = require('express');
const session = require('express-session');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const studentRoutes = require('./routes/studentRoutes');

require('dotenv').config();
const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const ensureAuthenticated = require('./middlewares/authMiddleware');

// Session setup
app.use(session({
    secret: 'anurag-nexus-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 }
}));

// Routes
app.use('/api', authRoutes);
app.use('/api', profileRoutes);
app.use('/api', studentRoutes);


// Protected Routes FIRST
app.get('/student-dashboard.html', ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'student-dashboard.html'));
});

app.get('/instructor-dashboard.html', ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'instructor-dashboard.html'));
});

// Serve other static files AFTER protected routes
app.use(express.static(path.join(__dirname, '..', 'public')));


// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
