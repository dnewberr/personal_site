var express = require("express"),
    mongoose = require("mongoose")

var app = express();
app.set("view engine", "ejs");

// DATABASE
mongoose.connect("mongodb://localhost/personal_site");
var Project = mongoose.model("Project", new mongoose.Schema({
    name: String,
    images: [String],
    completed: String,
    language: String,
    platform: String,
    gitURL: String,
    description: String
}));

var ResumeItem = mongoose.model("ResumeItem", new mongoose.Schema({
    title: String,
    date: String,
    description: String
}));

var ResumeSkill = mongoose.model("ResumeSkill", new mongoose.Schema({
    title: String,
    description: String,
    isExperience: Boolean
}));

// INDEX
app.get("/", function(req, res) {
   res.render("index") ;
});

// SERVER
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started.");
});