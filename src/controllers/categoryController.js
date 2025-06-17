const Category = require('../models/Category');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.render('instructor/categories', { categories });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getCategoriesPage = async (req, res) => {
    try {
        const categories = await Category.find();
        res.render('instructor-categories', { categories });
    } catch (err) {
        res.status(500).send('Error loading categories');
    }
};


exports.addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const existing = await Category.findOne({ name });
        if (existing) return res.redirect('/instructor/categories?error=Category already exists');
        await Category.create({ name });
        res.redirect('/instructor/categories');
    } catch (err) {
        res.status(500).send('Error adding category');
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await Category.findByIdAndDelete(id);
        res.redirect('/instructor/categories');
    } catch (err) {
        res.status(500).send('Error deleting category');
    }
};

