"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function levelOneTwo() {
  // Create an Animal class. The class will have name, age, color, legs properties and create different methods
  var Animal =
  /*#__PURE__*/
  function () {
    function Animal(name, age, color, legs) {
      _classCallCheck(this, Animal);

      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }

    _createClass(Animal, [{
      key: "getNameColor",
      value: function getNameColor() {
        var nameAndColor = "".concat(this.name, " and ").concat(this.color);
        return nameAndColor;
      }
    }, {
      key: "getAgeLegs",
      value: function getAgeLegs() {
        var ageAndLegs = "".concat(this.age, " and ").concat(this.legs);
        return ageAndLegs;
      }
    }]);

    return Animal;
  }(); // Create a Dog and Cat child class from the Animal Class.


  var dog = new Animal("Firulais", 2, "brown", 4);
  var cat = new Animal("Simba", 5, "orange", 4);
  console.log(dog);
  console.log(dog.getNameColor());
  console.log(dog.getAgeLegs());
  console.log(cat);
  console.log(cat.getNameColor());
  console.log(cat.getAgeLegs()); // Override the method you create in Animal class

  var Species =
  /*#__PURE__*/
  function (_Animal) {
    _inherits(Species, _Animal);

    function Species(name, age, color, legs, species) {
      var _this;

      _classCallCheck(this, Species);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Species).call(this, name, age, color, legs));
      _this.species = species;
      return _this;
    }

    return Species;
  }(Animal);

  var pet = new Species("Rex", 1, "gray", 4, "dog");
  console.log(pet);
} // Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.


var ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

var Statistics =
/*#__PURE__*/
function () {
  function Statistics() {
    _classCallCheck(this, Statistics);
  }

  _createClass(Statistics, [{
    key: "getCount",
    value: function getCount() {
      return ages.length;
    }
  }, {
    key: "getSum",
    value: function getSum() {
      return ages.reduce(function (a, b) {
        return a + b;
      }, 0);
    }
  }, {
    key: "getMin",
    value: function getMin() {
      var minimun = ages[0];
      ages.forEach(function (value) {
        if (value <= minimun) minimun = value;
      });
      return minimun;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      var maximun = ages[0];
      ages.forEach(function (value) {
        if (value >= maximun) maximun = value;
      });
      return maximun;
    }
  }, {
    key: "getRange",
    value: function getRange() {
      return this.getMax() - this.getMin();
    }
  }, {
    key: "getMean",
    value: function getMean() {
      return Math.round(this.getSum() / this.getCount());
    }
  }, {
    key: "getMedian",
    value: function getMedian() {
      return parseInt(this.getSum() / this.getCount());
    }
  }, {
    key: "getMode",
    value: function getMode() {
      var num = 0;
      var quantity = 0;

      for (var i = 0; i < ages.length; i++) {
        var check = ages[i];
        var _count = 0;

        for (var j = i; j < ages.length; j++) {
          if (check == ages[j]) _count++;
        }

        if (_count > quantity) {
          num = check;
          quantity = _count;
        }
      }

      return "Mode: ".concat(num, ", Count: ").concat(quantity);
    }
  }, {
    key: "getVariance",
    value: function getVariance() {
      var mean = this.getSum() / this.getCount();
      var deviationSquare = 0;

      for (var i = 0; i < ages.length; i++) {
        deviationSquare += Math.pow(ages[i] - mean, 2);
      }

      return deviationSquare / this.getCount();
    }
  }, {
    key: "getStd",
    value: function getStd() {
      return Math.sqrt(this.getVariance());
    }
  }]);

  return Statistics;
}();

var count = new Statistics();
console.log(count.getCount());
console.log(count.getSum());
console.log(count.getMin());
console.log(count.getMax());
console.log(count.getRange());
console.log(count.getMean());
console.log(count.getMedian());
console.log(count.getMode());
console.log(count.getVariance().toFixed(1));
console.log(count.getStd().toFixed(1));