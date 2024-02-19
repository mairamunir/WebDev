const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    name: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    createdAt: { type: Date, default: Date.now }
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
