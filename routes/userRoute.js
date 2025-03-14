
const express = require("express");
const User = require("../models/userModel"); 

const router = express.Router();

router.post("/create", async (req, res) => { // ✅ Fixed route path
    try {
        const { name, email, password, isPremiumMember, mobile } = req.body;

        // ✅ Fixed findOne() method
        const isUserExist = await User.findOne({ email: email });
        if (isUserExist) {
            return res.status(400).json({
                message: "User already exists",
                success: false
            });
        }

        // ✅ Create a new user correctly
        const newUser = new User({ name, email, password, isPremiumMember, mobile });
        await newUser.save(); // ✅ Added await

        res.json({
            message: "User created successfully",
            success: true
        });

    } catch (error) {
        res.status(500).json({ error: error.message }); // ✅ Better error handling
    }
});

module.exports = { userRouter: router };
