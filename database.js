/* const backgroundVideoOne = require("./video/ekko.mp4");
const backgroundVideoTwo = require("./video/garen.mp4");
const backgroundVideoThree = require("./video/vex.mp4");
const p1G = require("./video/Garen_0.jpg"); 
const p2G = require("./video/Garen_1.jpg");
const p3G = require("./video/Garen_2.jpg");
const p1V = require("http://localhost:4000/vex1.jpg"); 
const p2V = require("./video/vex2.jpg");
const p3V = require("./video/vex3.jpg"); 
const p2 = require("./video/Ekko_1.jpg");
const p3 = require("./video/Ekko_2.jpg"); */

const profile2 = {
  name: "Garen",
  headline: "Garen Champion Spotlight",
  headline2: "Hover GAREN SPINNING Basterd",
  //vidSource: backgroundVideoTwo,
  //picOne: p1G,
  //picTwo: p2G,
  //picThree: p3G,
  like: false,
};

const profile3 = {
  name: "Vex",
  headline: "Vex Champion Spotlight",
  headline2: "Hover Vex Icons Basterd",
  //vidSource: backgroundVideoThree,
  //picOne: p1V,
  //picTwo: p2V,
  //picThree: p3V,
  like: false,
};

const profile1 = {
  name: "Ekko",
  headline: "Ekko Champion Spotlight",
  headline2: "Hover Dose Icons Basterd",
  //vidSource: "ekko.mp4",
  //picOne: p1,
  //picTwo: p2,
  //picThree: p3,
  like: false,
};

const database = [profile1, profile2, profile3];

module.exports = { database };
