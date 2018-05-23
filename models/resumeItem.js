var mongoose = require("mongoose")

var resumeItemSchema = mongoose.Schema({
    title: String,
    date: String,
    description: String,
    type: String,
    timeline: Number
});

module.exports = mongoose.model("ResumeItem", resumeItemSchema);

// ResumeItem.create({
//     title: "Tenmarks, Amazon",
//     date: "Jun 2016 - Sep 2016",
//     description: "Software Developer Intern",
//     type: "Work"
// });
// ResumeItem.create({
//     title: "Prime Membership, Amazon SLO",
//     date: "Dec 2014 - Jun 2016",
//     description: "Jr. Sofware Developer",
//     type: "Work"
// });
// ResumeItem.create({
//     title: "Network Administration, Cal Poly SLO",
//     date: "Apr 2014 - Nov 2014",
//     description: "Student / Firewall Pinhole Assistant",
//     type: "Work"
// });
// ResumeItem.create({
//     title: "Cal Poly, San Luis Obispo",
//     date: "Sep 2012 - Mar 2017",
//     description: "Bachelor of Science, Computer Science | Minor in Mathematics",
//     type: "Education"
// });
