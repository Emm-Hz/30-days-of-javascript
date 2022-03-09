"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node"],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: "paul@paul.com",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

function levelOne() {
  // Create an empty object called dog
  var dog = {}; // Print the the dog object on the console

  console.log(dog); // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

  dog.name = "Fido";
  dog.legs = 4;
  dog.color = "black";
  dog.age = 5;
  dog.bark = "woof"; // Get name, legs, color, age and bark value from the dog object

  console.log("".concat(dog.name, ",").concat(dog.legs, ",").concat(dog.color, ",").concat(dog.age, ",").concat(dog.bark)); // Set new properties the dog object: breed, getDogInfo

  dog.breed = "yes";

  dog.getDogInfo = function () {
    return "Name: ".concat(this.name, ", ").concat(this.age, ", color: ").concat(this.color);
  };
}

function levelTwo() {
  // Find the person who has many skills in the users object.
  var numSkills = 0;
  var name = "";

  for (var _i = 0, _Object$entries = Object.entries(users); _i < _Object$entries.length; _i++) {
    var value = _Object$entries[_i];
    var accessSkill = Object.values(value[1].skills);

    if (accessSkill.length > numSkills) {
      name = value[0];
      numSkills = accessSkill.length;
    }
  }

  console.log("The person with more skills is ".concat(name, " with ").concat(numSkills)); // Count logged in users, count users having greater than equal to 50 points from the following object.

  var countLogIn = 0;
  var countPoints = 0;

  for (var _i2 = 0, _Object$entries2 = Object.entries(users); _i2 < _Object$entries2.length; _i2++) {
    var _value = _Object$entries2[_i2];
    var isLoged = _value[1].isLoggedIn;
    var numOfPoints = _value[1].points;
    if (isLoged == true) countLogIn++;
    if (numOfPoints >= 50) countPoints++;
  }

  console.log("The numbers of person logged in is: ".concat(countLogIn, ". The numbers of persons with more or equal to 50 are: ").concat(countPoints)); // Find people who are MERN stack developer from the users object

  var mern = [];

  for (var _i3 = 0, _Object$entries3 = Object.entries(users); _i3 < _Object$entries3.length; _i3++) {
    var _value2 = _Object$entries3[_i3];

    var _accessSkill = Object.values(_value2[1].skills);

    if (_accessSkill.indexOf("MongoDB") != -1 && _accessSkill.indexOf("Express") != -1 && _accessSkill.indexOf("React") != -1 && _accessSkill.indexOf("Node") != -1) {
      mern.push(_value2[0]);
    }
  }

  console.log(mern); // Set your name in the users object without modifying the original users object

  var me = {
    Emmanuel: {
      email: "ej.higuer@gmail.com",
      skills: ["HTMl", "CSS", "JavaScript", "MongoDB", "React", "Vue", "Node"],
      age: 27,
      isLoginIn: false,
      points: 30
    }
  };
  var newUsers = Object.assign(users, me);
  console.log(newUsers); // Get all keys or properties of users object

  console.log(Object.entries(users)); // Get all the values of users object

  console.log(Object.values(users));
} // Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


var personAccount = {
  firstName: "Mario",
  lastName: "Bros",
  incomes: [100],
  expenses: [100],
  totalIncome: function totalIncome() {
    return this.incomes.reduce(function (actVal, preVal) {
      return preVal + actVal;
    });
  },
  totalExpense: function totalExpense() {
    return this.expenses.reduce(function (actVal, preVal) {
      return preVal + actVal;
    });
  },
  accountInfo: function accountInfo() {
    return "The name is: ".concat(this.firstName, " ").concat(this.lastName);
  },
  accountBalance: function accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
};

function addIncome(income) {
  personAccount.incomes.push(income);
}

function addExpense(expen) {
  personAccount.expenses.push(expen);
}

addIncome(30);
addExpense(10);
console.log("The total of incomes is: ".concat(personAccount.totalIncome(), ", the total of expenses is: ").concat(personAccount.totalExpense(), " and the balance is: ").concat(personAccount.accountBalance())); // **** Questions:2, 3 and 4 are based on the following two arrays:online and products ()

var online = [{
  _id: "ab12ex",
  username: "Alex",
  email: "alex@alex.com",
  password: "123123",
  createdAt: "08/01/2020 9:00 AM",
  isLoggedIn: false
}, {
  _id: "fg12cy",
  username: "Asab",
  email: "asab@asab.com",
  password: "123456",
  createdAt: "08/01/2020 9:30 AM",
  isLoggedIn: true
}, {
  _id: "zwf8md",
  username: "Brook",
  email: "brook@brook.com",
  password: "123111",
  createdAt: "08/01/2020 9:45 AM",
  isLoggedIn: true
}, {
  _id: "eefamr",
  username: "Martha",
  email: "martha@martha.com",
  password: "123222",
  createdAt: "08/01/2020 9:50 AM",
  isLoggedIn: false
}, {
  _id: "ghderc",
  username: "Thomas",
  email: "thomas@thomas.com",
  password: "123333",
  createdAt: "08/01/2020 10:00 AM",
  isLoggedIn: false
}];
var products = [{
  _id: "eedfcf",
  name: "mobile phone",
  description: "Huawei Honor",
  price: 200,
  ratings: [{
    userId: "fg12cy",
    rate: 5
  }, {
    userId: "zwf8md",
    rate: 4.5
  }],
  likes: []
}, {
  _id: "aegfal",
  name: "Laptop",
  description: "MacPro: System Darwin",
  price: 2500,
  ratings: [],
  likes: ["fg12cy"]
}, {
  _id: "hedfcg",
  name: "TV",
  description: "Smart TV:Procaster",
  price: 400,
  ratings: [{
    userId: "fg12cy",
    rate: 5
  }],
  likes: ["fg12cy"]
}]; // Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp() {
  var user = prompt("Require the username", "Add the username");
  var email = prompt("Require the email", "Add the email");
  var pass = prompt("Require the pass", "Add the pass");

  for (var _i4 = 0, _Object$entries4 = Object.entries(online); _i4 < _Object$entries4.length; _i4++) {
    var userName = _Object$entries4[_i4];

    if (user == userName[1].username) {
      return "User already exist!";
    }
  }

  var newUser = {
    _id: "aaaa",
    username: user,
    email: email,
    pass: pass,
    isLoggedIn: true
  };
  var add = Object.assign(online, newUser);
  return add;
} // TODO console.log(signUp());
// b. Create a function called signIn which allows user to sign in to the application


function signIn() {
  var user = prompt("Require the username", "Add the username");
  var pass = prompt("Require the pass", "Add the pass");

  for (var _i5 = 0, _Object$entries5 = Object.entries(online); _i5 < _Object$entries5.length; _i5++) {
    var values = _Object$entries5[_i5];

    if (user == values[1].username && pass == values[1].password) {
      values[1].isLoggedIn = true;
      return "Signed In!!";
    }

    continue;
  }
} // TODO console.log(signIn());
// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product


var prod = prompt("Require the product name", "Add the product name");

function rateProduct(evaluation, prodduct) {
  var rateObject = 3;

  for (var _i6 = 0, _Object$entries6 = Object.entries(products); _i6 < _Object$entries6.length; _i6++) {
    var values = _Object$entries6[_i6];

    if (prodduct == values[1].name) {
      values[1].ratings.push({
        userId: "aaaa",
        rate: evaluation
      });
    }

    continue;
  }
}

rateProduct(prod);
console.log(products); // b. Create a function called averageRating which calculate the average rating of a product

function averageRating(product) {
  for (var _i7 = 0, _Object$entries7 = Object.entries(products); _i7 < _Object$entries7.length; _i7++) {
    var values = _Object$entries7[_i7];

    if (product == values[1].name) {
      var _ret = function () {
        var quantity = values[1].ratings.length;
        return {
          v: values[1].ratings.reduce(function (valA, valB) {
            return (valA + valB) / quantity;
          })
        };
      }();

      if (_typeof(_ret) === "object") return _ret.v;
    }

    continue;
  }
}

console.log(averageRating(prod));