var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    nodemailer = require("nodemailer");

var app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// DATABASE
mongoose.connect("mongodb://localhost/personal_site");
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
                    console.log("SUCCESS!");
                    res.render("about", {
                        workItems: resumeItems.filter(work),
                        educationItems: resumeItems.filter(education),
                        leadershipSkills: resumeSkills.filter(leadership),
                        jobSkills: resumeSkills.filter(job)
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
function leadership(resumeSkill) {
    return resumeSkill.type == "Leadership";
}
function job(resumeSkill) {
    return resumeSkill.type == "Job";
}

// INDEX
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
        } else {
            mailOptions = {
                to : req.body.email,
                subject : "Thanks for the message!",
                text : req.body.name + ",\n\nThanks for sending me a message. I've received it and I'll get back to you as soon as possible.\n\n- Deborah"
            }
            smtpTransport.sendMail(mailOptions, function(error, response){
                if(error){
                    console.log(error);
                } else{
                    res.redirect("/");
                }
            });
        }
    });
});

// SERVER
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started.");
});