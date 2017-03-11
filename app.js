var express = require("express"),
    mongoose = require("mongoose")

var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// DATABASE
mongoose.connect("mongodb://localhost/personal_site");
var Project = require("./models/project");
var ResumeItem = require("./models/resumeItem");
var ResumeSkill = require("./models/resumeSkill");

// INDEX
app.get("/", function(req, res) {
   res.render("index") ;
});

// INDEX
app.get("/projects", function(req, res) {
    Project.find({}, function(err, projects) {
        if (err) {
            console.log(err);
        } else {
            console.log("SUCCESS!");
            res.render("projects", {projects: projects}) ;
        }
    });
});


// ResumeItem.create({
//     title: "TESTWORK",
//     date: "TESTWORK",
//     description: "TESTWORK",
//     type: "Work"
// });
// ResumeItem.create({
//     title: "NOT WORK",
//     date: "NOT WORK",
//     description: "NOT WORK",
//     type: "Work2"
// });

// INDEX
app.get("/about", function(req, res) {
   ResumeItem.find({}, function(err, resumeItems) {
        if (err) {
            console.log(err);
        } else {
            ResumeSkill.find({}, function(err, resumeSkills) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("SUCCESS!\n" + resumeItems + "\n\tSKILLS:\n" + resumeSkills);
                    res.render("about", {
                        workItems: resumeItems.filter(work),
                        educationItems: resumeItems.filter(education),
                        resumeSkills: resumeSkills
                    }) ;
                }
            });
        }
    });
});

function work(resumeItem) {
    return resumeItem.type == "Work";
}
function education(resumeItem) {
    return resumeItem.type == "Education";
}

// INDEX
app.get("/contact", function(req, res) {
   res.render("contact") ;
});

// SERVER
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started.");
});