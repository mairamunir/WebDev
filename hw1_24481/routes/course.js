
const Users = require("../models/User");
const Course = require("../models/Course");
var express = require("express");
var router = express.Router();

router.post("/addCourse", async (req, res) => {
    try {
        const { name, email } = req.body;

        // Check if required fields are provided
        if (!name || !email) {
            return res.status(400).json({ error: "Name and email are required" });
        }

        // Find the instructor by email
        const instructor = await Users.findOne({ email });
        if (!instructor) {
            return res.status(404).json({ error: "Instructor not found" });
        }

        // Create a new course
        const newCourse = new Course({ name, instructor: instructor._id });
        await newCourse.save();

        res.json({ msg: "Course created successfully", courseId: newCourse._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const courses = await Course.find().populate('instructor', 'name');
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
