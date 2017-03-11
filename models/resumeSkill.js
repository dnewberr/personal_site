var mongoose = require("mongoose")

var resumeSkillSchema = mongoose.Schema({
    title: String,
    description: String,
    isExperience: Boolean
});

module.exports = mongoose.model("ResumeSkill", resumeSkillSchema);