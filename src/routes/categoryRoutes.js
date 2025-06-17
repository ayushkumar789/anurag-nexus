const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const ensureAuthenticated = require('../middlewares/authMiddleware');

router.get('/instructor/categories', ensureAuthenticated, categoryController.getCategoriesPage);
router.post('/instructor/categories/add', ensureAuthenticated, categoryController.addCategory);
router.post('/instructor/categories/delete/:id', ensureAuthenticated, categoryController.deleteCategory);

module.exports = router;
