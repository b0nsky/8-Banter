const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');
const passport = require('passport');

// Routes for user
router.get('/register', UserController.registerPage);
router.post('/register', UserController.register); // Register a new user
router.get('/login', UserController.loginPage);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/memes',
    failureRedirect: '/users/login',
    failureFlash: true
}));
router.get('/logout', UserController.logout);
router.get('/profile/:id', UserController.getProfile); // Get user profile
router.get('/profile/update/:id', UserController.getUpdateProfile); // Update user profile
router.post('/profile/update/:id', UserController.postUpdateProfile); // Update user profile
router.delete('/profile/:id', UserController.deleteProfile); // Delete user profile

module.exports = router;
