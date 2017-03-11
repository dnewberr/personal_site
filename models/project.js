var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
    name: String,
    image: String,
    completed: String,
    language: String,
    platform: String,
    link: String,
    linkDescription: String,
    description: String
});

module.exports = mongoose.model("Project", projectSchema);



// Project.create({
//     name: "HarryBird (FlappyBird)",
//     image: "./images/harrybird_midair.png",
//     completed: "Winter '16",
//     language: "Swift",
//     platform: "iOS",
//     link: "https://github.com/dnewberr/FlappyBird",
//     linkDescription: "Github",
//     description: "HarryBird was my first iOS project. The result was a cummulation of the first half of my iOS class my fourth year of college, and was my first attempt at making a game, programming for a phone, and using Swift. Soundtrack belongs to EA and was part of the original Harry Potter video games. Background cloud image was found online, as were the rolling hills. I made the 'HarryBird' character and the pillars used as obstacles."
// });

// Project.create({
//     name: "Savvy",
//     image: "./images/SavvyLogo.png",
//     completed: "Winter '16",
//     language: "Swift",
//     platform: "iOS",
//     link: "https://github.com/dnewberr/Savvy",
//     linkDescription: "Github",
//     description: "Savvy was the partner final project I made for my iOS class my fourth year at Cal Poly. It's a copycat of the popular flashcard application, <a href='https://quizlet.com/latest'>Quizlet</a>, and even lets users import their already-existing flashcard information from there. Users can then learn cards,<br><br>We used <a href='https://github.com/Alamofire'>Alamofire</a>, <a href='http://parseplatform.github.io/'>Parse</a>, <a href='https://github.com/SwiftyJSON/SwiftyJSON'>SwiftyJSON</a>, <a href='https://github.com/BoltsFramework'>Bolts</a>, the <a href='https://developers.facebook.com/'>Facebook API</a>, and the <a href='https://quizlet.com/api/2.0/docs'>Quizlet API</a>. We also used mostly pure wireframes for the look of the app, as UI was not a main priority for the class."
// });

// Project.create({
//     name: "Woods Humane Society",
//     image: "https://lh3.googleusercontent.com/tBMi3-NoNf_Aw9yGvZS2FpVUEhDHUyHq_tk4QqyZ48HpbsLAByXGEy84crcwugewWZk=h310-rw",
//     completed: "Spring '16",
//     language: "Java",
//     platform: "Android",
//     link: "https://play.google.com/store/apps/details?id=org.woodshumanesocietyandroid&hl=en",
//     linkDescription: "Google Play Store",
//     description: "\"Woods Humane Society is an independent nonprofit organization dedicated to the humane care of homeless dogs and cats in San Luis Obispo County.\" (<a href='http://www.woodshumanesociety.org/'>Woods Humane Society</a>)<br><br>In the spring quarter of my 4th year at Cal Poly, I teamed up with four others to build an Android version of an iOS app created by student for their thesis. We took her existing iOS design and adjusted it to fit Android users. The app is available to all volunteers at the humane society, and is used to manage the dogs they tend to by marking their latest baths, walks, feedings, etc. It also helps the volunteers keep track of dog names, traits, and adoption dates. It's currently available on the Google Play Store for Android."
// });

// Project.create({
//     name: "Iota Pi App",
//     image: "./images/Loading_Screen.png",
//     completed: "In Progress",
//     language: "Swift",
//     platform: "iOS",
//     link: "https://github.com/dnewberr/Iota_Pi_iOS",
//     linkDescription: "Github",
//     description: "<a href='https://www.kkpsi.org/'>Kappa Kappa Psi</a> is national honorary fraternity for college bandmembers. I was initiated into the brotherhood in March of 2014, and since then went on to hold a few leadership positions in both the <a href='http://mband.calpoly.edu'>Cal Poly Mustang Band</a> and our chapter of Kappa Kappa Psi, <a href='http://www.iotapi.com/'>Iota Pi</a>.<br><br>I chose to create an organizational app for the chapter as my senior project. I began by designing it during the Fall of 2016, and actually started coding back in October. The app will have ways for the officers of the chapter to keep track of attendance, voting proceedures, and general brother information. All of this is currently available through mutiple platforms (<a href='https://drive.google.com'>Google Drive</a> and <a href='https://drive.google.com'>Calendar</a>, paper and pencil, etc), and streamlining these processes will make the chapter more efficient.<hr><div class='row project-stats'><div class='col-xs-6 col-sm-3'><a href='https://docs.google.com/document/d/1IMFH2kKw3Zh70Yw990a49h9NVTzCHOz0TNXjDsIM3F0/edit?usp=sharing'>Proposal</a></div><div class='col-xs-6 col-sm-3'><a href='https://invis.io/NG8S2ZS35'>Design</a></div><div class='col-xs-6 col-sm-3'><a href='https://docs.google.com/document/d/19r5snTyDI-kcPdIGL9YHJrYq71esXb1v7ur2hGAeyCE/edit?usp=sharing'>Mid-Project Report</a></div><div class='col-xs-6 col-sm-3'>Final Report (N/A)</div></div>"
// });
