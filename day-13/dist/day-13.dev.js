"use strict";

var _countries_data = require("./../countries_data.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function levelOne() {
  // Display the countries array as a table
  console.table(_countries_data.countries); // Use console.group() to group logs

  console.group("Logs");
  console.log("Hello");
  console.log("World");
  console.log("This is a group");
  console.groupEnd();
}

function levelTwo() {
  // 10 > 2 * 10 use console.assert()
  console.assert(10 > 2 * 10, "10 is not bigger than 2*10"); // Write a warning message using console.warn()

  console.warn("DANGER"); // Write an error message using console.error()

  console.error("There is a error");
}

function levelThree() {
  // Check the speed difference among the following loops: while, for, for of, forEach
  var countriesLocal = [["Finland", "Helsinki"], ["Sweden", "Stockholm"], ["Norway", "Oslo"]];
  console.time("While loop");
  var i = 0;

  while (i < countriesLocal.length) {
    console.log(countriesLocal[i][0], countriesLocal[i][1]);
    i++;
  }

  console.timeEnd("While loop");
  console.time("Regular for loop");

  for (var _i = 0; _i < countriesLocal.length; _i++) {
    console.log(countriesLocal[_i][0], countriesLocal[_i][1]);
  }

  console.timeEnd("Regular for loop");
  console.time("for of loop");

  for (var _i2 = 0, _countriesLocal = countriesLocal; _i2 < _countriesLocal.length; _i2++) {
    var _countriesLocal$_i = _slicedToArray(_countriesLocal[_i2], 2),
        name = _countriesLocal$_i[0],
        city = _countriesLocal$_i[1];

    console.log(name, city);
  }

  console.timeEnd("for of loop");
  console.time("forEach loop");
  countriesLocal.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        city = _ref2[1];

    console.log(name, city);
  });
  console.timeEnd("forEach loop");
}