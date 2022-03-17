"use strict";

function levelOne() {
  // Store you first name, last name, age, country, city in your browser localStorage.
  localStorage.setItem("firstName", "Emmanuel");
  localStorage.setItem("lastName", "Higuera");
  localStorage.setItem("age", "26");
  localStorage.setItem("country", "Venezuela");
  localStorage.setItem("city", "Barquisimeto");
  console.log(localStorage);
}

function levelTwo() {
  // Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
  var student = {
    firstName: "Luis",
    lastName: "Torrez",
    age: 31,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    country: "Chile"
  };
  var studentTxt = JSON.stringify(student, undefined, 4);
  localStorage.setItem("student", studentTxt);
  console.log(localStorage);
}