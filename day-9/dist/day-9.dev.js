"use strict";

var countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"];
var names = ["Asabeneh", "Mathias", "Elias", "Brook"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var products = [{
  product: "banana",
  price: 3
}, {
  product: "mango",
  price: 6
}, {
  product: "potato",
  price: ""
}, {
  product: "avocado",
  price: 8
}, {
  product: "coffee",
  price: 10
}, {
  product: "tea",
  price: ""
}];

function levelOne() {
  // Use forEach to console.log each country in the countries array.
  countries.forEach(function (countrieName) {
    return console.log(countrieName);
  }); // Use forEach to console.log each name in the names array.

  names.forEach(function (nameList) {
    return console.log(nameList);
  }); // Use forEach to console.log each number in the numbers array.

  numbers.forEach(function (number) {
    return console.log(number);
  }); // Use map to create a new array by changing each country to uppercase in the countries array.

  var countrieUpper = countries.map(function (countriesName) {
    return countriesName.toUpperCase();
  });
  console.log(countrieUpper); // Use map to create an array of countries length from countries array.

  var countrieLength = countries.map(function (countriesName) {
    return countriesName.length;
  });
  console.log(countrieLength); // Use map to create a new array by changing each number to square in the numbers array

  var numberSquare = numbers.map(function (numbers) {
    return Math.pow(numbers, 2);
  });
  console.log(numberSquare); // Use map to change to each name to uppercase in the names array

  var namesUpper = names.map(function (namesUpp) {
    return namesUpp.toUpperCase();
  });
  console.log(namesUpper); // Use map to map the products array to its corresponding prices.

  var productArray = products.map(function (element) {
    return element;
  });
  console.log(productArray); // Use filter to filter out countries containing land.

  var countriesLand = countries.filter(function (element) {
    return element.match(/land/i);
  });
  console.log(countriesLand); // Use filter to filter out countries having six character.

  var countrieSix = countries.filter(function (element) {
    return element.length == 6;
  });
  console.log(countrieSix); // Use filter to filter out countries containing six letters and more in the country array.

  var countrieSixMore = countries.filter(function (element) {
    return element.length >= 6;
  });
  console.log(countrieSixMore); // Use filter to filter out country start with 'E';

  var onlyE = countries.filter(function (element) {
    return element.match(/^E/);
  });
  console.log(onlyE); // Use filter to filter out only prices with values.

  var productPrice = products.filter(function (element) {
    return element.price != "";
  });
  console.log(productPrice); // Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

  function getStringLists(arrayElement) {
    return arrayElement.filter(function (elemet) {
      return typeof elemet === "string";
    });
  }

  console.log(getStringLists(names)); // Use reduce to sum all the numbers in the numbers array.

  console.log(numbers.reduce(function (a, b) {
    return a + b;
  })); // Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, IceLand are north European countries

  console.log(countries.reduce(function (countrieA, countrieB) {
    return countrieA + ", " + countrieB;
  }) + " are north European countries"); // Use some to check if some names' length greater than seven in names array

  console.log(names.some(function (a) {
    return a.length > 7;
  })); // Use every to check if all the countries contain the word land

  console.log(countries.every(function (name) {
    return name.includes("land");
  })); // Use find to find the first country containing only six letters in the countries array

  console.log(countries.find(function (val) {
    return val.length == 6;
  })); // Use findIndex to find the position of the first country containing only six letters in the countries array

  console.log(countries.findIndex(function (val) {
    return val.length == 6;
  })); // Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

  console.log(countries.findIndex(function (val) {
    return val == "Norway";
  })); // Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

  console.log(countries.findIndex(function (val) {
    return val == "Russia";
  }));
}

function levelTwo() {
  // Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
  console.log(products.filter(function (value) {
    return typeof value.price === "number";
  }).map(function (value) {
    return value.price;
  }).reduce(function (a, b) {
    return a + b;
  })); // Find the sum of price of products using only reduce reduce(callback))

  console.log(products.reduce(function (prev, value) {
    return parseInt(prev) + value.price;
  }, 0)); // Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

  var commonPattern = "land";

  function categorizeCountries(countriesArray, finder) {
    return countriesArray.filter(function (x) {
      return x.includes(finder);
    });
  }

  console.log(categorizeCountries(countries, commonPattern));
}