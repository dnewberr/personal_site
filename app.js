var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    favicon = require('serve-favicon');

// FAVICON
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));


// EXPRESS
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// DATABASE
// mongoose.connect("mongodb://localhost/personal_site");
mongoose.connect("mongodb://deborah:personal@ds131320.mlab.com:31320/personal_site");
var Project = require("./models/project");
var ResumeItem = require("./models/resumeItem");
var ResumeSkill = require("./models/resumeSkill");

// INDEX
app.get("/", function(req, res) {
   res.render("index") ;
});

// PROJECTS
app.get("/projects", function(req, res) {
    Project.find({}, function(err, projects) {
        if (err) {
            console.log(err);
        } else {
            res.render("projects", {projects: projects});
        }
    });
});

// ABOUT
app.get("/about", function(req, res) {
   ResumeItem.find({}, function(err, resumeItems) {
        if (err) {
            console.log(err);
        } else {
            ResumeSkill.find({}, function(err, resumeSkills) {
                if (err) {
                    console.log(err);
                } else {
                    res.render("about", {
                        workItems: resumeItems.filter(work).sort(orderByTimeline),
                        internshipItems: resumeItems.filter(internship).sort(orderByTimeline),
                        educationItems: resumeItems.filter(education),
                        leadershipSkills: resumeSkills.filter(leadership),
                        jobSkills: resumeSkills.filter(job)
                    });
                }
            });
        }
    });
});

function orderByTimeline(a, b) {
    return a.timeline < b.timeline;
}

function internship(resumeItem) {
    return resumeItem.type == "Internship";
}

function work(resumeItem) {
    return resumeItem.type == "Work";
}

function education(resumeItem) {
    return resumeItem.type == "Education";
}

function leadership(resumeSkill) {
    return resumeSkill.type == "Leadership";
}

function job(resumeSkill) {
    return resumeSkill.type == "Job";
}

// SERVER
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started.");
});