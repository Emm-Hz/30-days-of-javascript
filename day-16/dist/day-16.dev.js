"use strict";

var skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
var age = 250;
var isMarried = true;
var student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"]
};
var txt = "{\n    \"Alex\": {\n        \"email\": \"alex@alex.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\"\n        ],\n        \"age\": 20,\n        \"isLoggedIn\": false,\n        \"points\": 30\n    },\n    \"Asab\": {\n        \"email\": \"asab@asab.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"Redux\",\n            \"MongoDB\",\n            \"Express\",\n            \"React\",\n            \"Node\"\n        ],\n        \"age\": 25,\n        \"isLoggedIn\": false,\n        \"points\": 50\n    },\n    \"Brook\": {\n        \"email\": \"daniel@daniel.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"React\",\n            \"Redux\"\n        ],\n        \"age\": 30,\n        \"isLoggedIn\": true,\n        \"points\": 50\n    },\n    \"Daniel\": {\n        \"email\": \"daniel@alex.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"Python\"\n        ],\n        \"age\": 20,\n        \"isLoggedIn\": false,\n        \"points\": 40\n    },\n    \"John\": {\n        \"email\": \"john@john.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"React\",\n            \"Redux\",\n            \"Node.js\"\n        ],\n        \"age\": 20,\n        \"isLoggedIn\": true,\n        \"points\": 50\n    },\n    \"Thomas\": {\n        \"email\": \"thomas@thomas.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"React\"\n        ],\n        \"age\": 20,\n        \"isLoggedIn\": false,\n        \"points\": 40\n    },\n    \"Paul\": {\n        \"email\": \"paul@paul.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"MongoDB\",\n            \"Express\",\n            \"React\",\n            \"Node\"\n        ],\n        \"age\": 20,\n        \"isLoggedIn\": false,\n        \"points\": 40\n    }\n}\n";

function levelOne() {
  // Change skills array to JSON using JSON.stringify()
  var skillsJson = JSON.stringify(skills, ["language"], 1);
  console.log(skillsJson); // Stringify the age variable

  var ageJson = JSON.stringify(age, "age", 1);
  console.log(ageJson); // Stringify the isMarried variable

  var married = JSON.stringify(isMarried, "married", 0);
  console.log(married); // Stringify the student object

  var studentJson = JSON.stringify(student, {
    name: "value"
  }, 2);
  console.log(studentJson);
}

function levelTwo() {
  // Stringify the students object with only firstName, lastName and skills properties
  var studentsValues = JSON.stringify(student, ["firstName", "lastName", "skills"], 3);
  console.log(studentsValues);
}

function levelThree() {
  // Parse the txt JSON to object.
  var txtObject = JSON.parse(txt, undefined, 4);
  console.log(txtObject); // Find the user who has many skills from the variable stored in txt.

  var getName = "";
  var moreSkills = 0;

  for (var _i = 0, _Object$entries = Object.entries(txtObject); _i < _Object$entries.length; _i++) {
    var name = _Object$entries[_i];
    console.log(name);

    if (name[1].skills.length > moreSkills) {
      getName = name[0];
      moreSkills = name[1].skills.length;
    }
  }

  console.log(getName);
}