const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
    coursename: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "computer science"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('course', CourseSchema);