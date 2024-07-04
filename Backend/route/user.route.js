import express from 'express';
import userController from '../controller/user.controller.js'; // Adjust the path based on your project structure

const router = express.Router();

// Define the signup route
router.post('/signup', userController.userSignup);

export default router;
