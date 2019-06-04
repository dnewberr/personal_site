
require('firebase/database');
const functions = require('firebase-functions'),
    firebase = require('firebase'),
    admin = require('firebase-admin'),
	express = require("express"),
    bodyParser = require("body-parser"),
    favicon = require('serve-favicon'),
    app = express();

const firebaseDatabaseURL = "https://personal-site-9d95f.firebaseio.com/"

// EXPRESS
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


// FIREBASE
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: firebaseDatabaseURL,
});

const firebaseConfig = {
    apiKey: "AIzaSyBDPzbmabNqNj4_mWFeJkPTey1WK1_8lEo",
    authDomain: "personal-site-9d95f.firebaseapp.com",
    databaseURL: firebaseDatabaseURL,
    projectId: "personal-site-9d95f",
    storageBucket: "personal-site-9d95f.appspot.com",
    messagingSenderId: "1096355229418",
    appId: "1:1096355229418:web:cd0aa2df0734eb13"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// FAVICON
app.use(favicon("public/images/favicon.ico")); 

// INDEX
app.get("/", function(req, res) {
   res.render("index") ;
});

// PROJECTS
app.get("/projects", function(req, res) {
    database.ref('/projects').once('value').then(function(snapshot) {
        res.render("projects", {projects: snapshot.val()});
    });
});

// ABOUT
app.get("/about", function(req, res) {
        database.ref('/resumeItems').once('value').then(function(snapshot) {
            const resumeItems = snapshot.val()
            database.ref('/resumeSkills').once('value').then(function(snapshot) {
                const resumeSkills = snapshot.val()
                res.render("about", {
                        workItems: resumeItems.filter(work).sort(orderByTimeline),
                        internshipItems: resumeItems.filter(internship).sort(orderByTimeline),
                        educationItems: resumeItems.filter(education),
                        leadershipSkills: resumeSkills.filter(leadership),
                        jobSkills: resumeSkills.filter(job)
                    });
            });
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

exports.app = functions.https.onRequest(app);
