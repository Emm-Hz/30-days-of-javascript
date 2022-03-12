"use strict";

var _countries_data = require("../countries_data.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var constants = [2.72, 3.14, 9.81, 37, 100];
var countriesInside = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
var rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};
var users = [{
  name: "Brook",
  scores: 75,
  skills: ["HTM", "CSS", "JS"],
  age: 16
}, {
  name: "Alex",
  scores: 80,
  skills: ["HTM", "CSS", "JS"],
  age: 18
}, {
  name: "David",
  scores: 75,
  skills: ["HTM", "CSS"],
  age: 22
}, {
  name: "John",
  scores: 85,
  skills: ["HTML"],
  age: 25
}, {
  name: "Sara",
  scores: 95,
  skills: ["HTM", "CSS", "JS"],
  age: 26
}, {
  name: "Martha",
  scores: 80,
  skills: ["HTM", "CSS", "JS"],
  age: 18
}, {
  name: "Thomas",
  scores: 90,
  skills: ["HTM", "CSS", "JS"],
  age: 20
}];

function levelOne() {
  // Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
  var e = constants[0],
      pi = constants[1],
      gravity = constants[2],
      humanBodyTemp = constants[3],
      waterBoilingTemp = constants[4];
  console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp); // Destructure and assign the elements of countries array to fin, est, sw, den, nor

  var _countries = _slicedToArray(_countries_data.countries, 5),
      fin = _countries[0],
      est = _countries[1],
      sw = _countries[2],
      den = _countries[3],
      nor = _countries[4];

  console.log(fin, est, sw, den, nor); // Destructure the rectangle object by its properties or keys.

  var width = rectangle.width,
      height = rectangle.height,
      area = rectangle.area,
      perimeter = rectangle.perimeter;
  console.log(width, height, area, perimeter);
}

function levelTwo() {
  // Iterate through the users array and get all the keys of the object using destructuring
  for (var _i2 = 0, _users = users; _i2 < _users.length; _i2++) {
    var _users$_i = _users[_i2],
        _name = _users$_i.name,
        scires = _users$_i.scires,
        _skills = _users$_i.skills,
        age = _users$_i.age;
    console.log(_name, scires, _skills, age);
  } // Find the persons who have less than two skills


  for (var _i3 = 0, _users2 = users; _i3 < _users2.length; _i3++) {
    var _users2$_i = _users2[_i3],
        _name2 = _users2$_i.name,
        _skills2 = _users2$_i.skills;
    if (_skills2.length < 2) console.log(_name2);
  }
} // Destructure the countries object print name, capital, population and languages of all countries


var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _countries_data.countries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _step.value,
        _name4 = _step$value.name,
        capital = _step$value.capital,
        population = _step$value.population,
        languages = _step$value.languages;
  } //   console.log(name, capital, population, languages);
  // A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

var name = student[0],
    _student$ = _toArray(student[1]),
    skills = _student$.slice(0),
    _student$2 = _slicedToArray(student[2], 2),
    jsScore = _student$2[0],
    reactScore = _student$2[1];

console.log(name, skills, jsScore, reactScore); // Write a function called convertArrayToObject which can convert the array to a structure object.

var students = [["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]], ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]]];

function convertArrayToObject(arrayToConvert) {
  var structureObject = [];

  for (var _i4 = 0, _students = students; _i4 < _students.length; _i4++) {
    var _students$_i = _slicedToArray(_students[_i4], 3),
        _name3 = _students$_i[0],
        _students$_i$ = _toArray(_students$_i[1]),
        _skills3 = _students$_i$.slice(0),
        _students$_i$2 = _toArray(_students$_i[2]),
        scores = _students$_i$2.slice(0);

    structureObject.push({
      name: _name3,
      skills: _skills3,
      scores: [scores]
    });
  }

  return structureObject;
}

console.log(convertArrayToObject(students)); // Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

var studentObject = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [{
      skill: "HTML",
      level: 10
    }, {
      skill: "CSS",
      level: 8
    }, {
      skill: "JS",
      level: 8
    }, {
      skill: "React",
      level: 9
    }],
    backEnd: [{
      skill: "Node",
      level: 7
    }, {
      skill: "GraphQL",
      level: 8
    }],
    dataBase: [{
      skill: "MongoDB",
      level: 7.5
    }],
    dataScience: ["Python", "R", "D3.js"]
  }
};

var copyStudent = _objectSpread({}, studentObject);

copyStudent.skills.frontEnd.push({
  skill: "Bootstrap",
  level: 8
});
copyStudent.skills.backEnd.push({
  skills: "Express",
  level: 9
});
copyStudent.skills.dataBase.push({
  skills: "SQL",
  level: 8
});
copyStudent.skills.dataScience.push("SQL");
console.log(copyStudent);