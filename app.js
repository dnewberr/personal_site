var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    nodemailer = require("nodemailer");

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

//EMAIL
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: 'dnewberry.contact@gmail.com',
        pass: 'c0ntact123!'
      }
});

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
            res.render("projects", {projects: projects}) ;
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
                        workItems: resumeItems.filter(work),
                        educationItems: resumeItems.filter(education),
                        leadershipSkills: resumeSkills.filter(leadership),
                        jobSkills: resumeSkills.filter(job)
                    });
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
function leadership(resumeSkill) {
    return resumeSkill.type == "Leadership";
}
function job(resumeSkill) {
    return resumeSkill.type == "Job";
}

// CONTACT
app.get("/contact", function(req, res) {
   res.render("contact") ;
});

app.post("/contact", function(req, res) {
    var mailOptions = {
        to : "dnewberry16@gmail.com",
        subject : "New Contact from Personal Site!",
        text : "From: " + req.body.name + "<" + req.body.email + ">\n\n\t" + req.body.message
    }

    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.render("contact", {alertClass: "alert-danger", alertTitle: "Error!", alertMessage: "There was an error in sending your email. Please try again later."})
        } else {
            res.render("contact", {alertClass: "alert-success", alertTitle: "Success!", alertMessage: "Your email has been sent!"})
        }
    });
});

// SERVER
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started.");
});