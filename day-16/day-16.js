const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

function levelOne() {
  // Change skills array to JSON using JSON.stringify()
  const skillsJson = JSON.stringify(skills, ["language"], 1);
  console.log(skillsJson);

  // Stringify the age variable
  const ageJson = JSON.stringify(age, "age", 1);
  console.log(ageJson);

  // Stringify the isMarried variable
  const married = JSON.stringify(isMarried, "married", 0);
  console.log(married);

  // Stringify the student object
  const studentJson = JSON.stringify(
    student,
    {
      name: "value",
    },
    2
  );
  console.log(studentJson);
}

function levelTwo() {
  // Stringify the students object with only firstName, lastName and skills properties
  const studentsValues = JSON.stringify(
    student,
    ["firstName", "lastName", "skills"],
    3
  );

  console.log(studentsValues);
}

function levelThree() {
  // Parse the txt JSON to object.
  const txtObject = JSON.parse(txt, undefined, 4);
  console.log(txtObject);

  // Find the user who has many skills from the variable stored in txt.
  let getName = "";
  let moreSkills = 0;

  for (let name of Object.entries(txtObject)) {
    console.log(name);
    if (name[1].skills.length > moreSkills) {
      getName = name[0];
      moreSkills = name[1].skills.length;
    }
  }

  console.log(getName);
}
