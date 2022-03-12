"use strict";

var _countries_data = require("../countries_data.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var a = [4, 5, 8, 9];
var b = [3, 4, 5, 7];

function levelOne() {
  // create an empty set
  var empty = new Set();
  console.log(empty); // Create a set containing 0 to 10 using loop

  var element = new Set();

  for (var i = 0; i <= 10; i++) {
    element.add(i);
  }

  console.log(element); // Remove an element from a set

  element["delete"](4);
  console.log(element); // Clear a set

  element.clear();
  console.log(element); // Create a set of 5 string elements from array

  var company = ["Google", "Facebook", "Instagram", "Whatsapp", "Uber"];
  var fiveElements = new Set(company);
  console.log(fiveElements); // Create a map of countries and number of characters of a country

  var countriesNum = [["Spain", 5], ["Mexico", 6], ["Peru", 4], ["Venezuela", 9]];
  var mapCountries = new Map(countriesNum);
  console.log(mapCountries);
}

function levelTwo() {
  // Find a union b
  var union = [].concat(a, b);
  var elementC = new Set(union);
  console.log(elementC); // Find a intersection b

  var elementA = new Set(a);
  var elementB = new Set(b);
  var intersection = a.filter(function (number) {
    return elementB.has(number);
  });
  console.log(intersection);
} // How many languages are there in the countries object file.


var count = 0;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _countries_data.countries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var name = _step.value;
    count += Object.values(name.languages).length;
  }
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

console.log(count); // *** Use the countries data to find the 10 most spoken languages:

var languages = [];
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop = function _loop() {
    var name = _step2.value;

    var filterCountries = _countries_data.countries.filter(function (element) {
      return element.languages === name.languages;
    });

    languages.push(_defineProperty({}, name.languages, filterCountries.length));
  };

  for (var _iterator2 = _countries_data.countries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}