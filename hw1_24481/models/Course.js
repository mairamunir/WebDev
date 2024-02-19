const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    
    name: String,
    instructor: { type: mongoose.SchemaTypes.ObjectId, ref: 'Users' },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;