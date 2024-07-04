import { body, validationResult } from 'express-validator';
import User from '../model/user.model.js';

const userController = {
  userSignup: [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('phone').isMobilePhone().withMessage('Invalid phone number'),
    body('message').optional(),

    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        const { name, email, phone, message } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({
          name,
          email,
          phone,
          message,
        });

        await newUser.save();
        res.status(201).json({
          message: "Send Message Successfully",
          user: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            phone: newUser.phone,
            message: newUser.message,
          },
        });
      } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  ],
};

export default userController;
