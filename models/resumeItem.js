var mongoose = require("mongoose")

var resumeItemSchema = mongoose.Schema({
    title: String,
    date: String,
    description: String,
    type: String
});

module.exports = mongoose.model("ResumeItem", resumeItemSchema);
