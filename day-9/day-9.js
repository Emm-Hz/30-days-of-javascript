const countries = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: "" },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

function levelOne() {
  // Use forEach to console.log each country in the countries array.
  countries.forEach((countrieName) => console.log(countrieName));

  // Use forEach to console.log each name in the names array.
  names.forEach((nameList) => console.log(nameList));

  // Use forEach to console.log each number in the numbers array.
  numbers.forEach((number) => console.log(number));

  // Use map to create a new array by changing each country to uppercase in the countries array.
  let countrieUpper = countries.map((countriesName) =>
    countriesName.toUpperCase()
  );

  console.log(countrieUpper);

  // Use map to create an array of countries length from countries array.
  let countrieLength = countries.map((countriesName) => countriesName.length);

  console.log(countrieLength);

  // Use map to create a new array by changing each number to square in the numbers array
  let numberSquare = numbers.map((numbers) => numbers ** 2);

  console.log(numberSquare);

  // Use map to change to each name to uppercase in the names array
  let namesUpper = names.map((namesUpp) => namesUpp.toUpperCase());

  console.log(namesUpper);

  // Use map to map the products array to its corresponding prices.
  let productArray = products.map((element) => element);

  console.log(productArray);

  // Use filter to filter out countries containing land.
  let countriesLand = countries.filter((element) => element.match(/land/i));

  console.log(countriesLand);

  // Use filter to filter out countries having six character.
  let countrieSix = countries.filter((element) => element.length == 6);

  console.log(countrieSix);

  // Use filter to filter out countries containing six letters and more in the country array.
  let countrieSixMore = countries.filter((element) => element.length >= 6);

  console.log(countrieSixMore);

  // Use filter to filter out country start with 'E';
  let onlyE = countries.filter((element) => element.match(/^E/));

  console.log(onlyE);

  // Use filter to filter out only prices with values.
  let productPrice = products.filter((element) => element.price != "");

  console.log(productPrice);

  // Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
  function getStringLists(arrayElement) {
    return arrayElement.filter((elemet) => typeof elemet === "string");
  }

  console.log(getStringLists(names));

  // Use reduce to sum all the numbers in the numbers array.
  console.log(numbers.reduce((a, b) => a + b));

  // Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, IceLand are north European countries
  console.log(
    countries.reduce((countrieA, countrieB) => countrieA + ", " + countrieB) +
      " are north European countries"
  );

  // Use some to check if some names' length greater than seven in names array
  console.log(names.some((a) => a.length > 7));

  // Use every to check if all the countries contain the word land
  console.log(countries.every((name) => name.includes("land")));

  // Use find to find the first country containing only six letters in the countries array
  console.log(countries.find((val) => val.length == 6));

  // Use findIndex to find the position of the first country containing only six letters in the countries array
  console.log(countries.findIndex((val) => val.length == 6));

  // Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
  console.log(countries.findIndex((val) => val == "Norway"));

  // Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
  console.log(countries.findIndex((val) => val == "Russia"));
}

function levelTwo() {
  // Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
  console.log(
    products
      .filter((value) => typeof value.price === "number")
      .map((value) => value.price)
      .reduce((a, b) => a + b)
  );

  // Find the sum of price of products using only reduce reduce(callback))
  console.log(
    products.reduce((prev, value) => parseInt(prev) + value.price, 0)
  );

  // Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
  let commonPattern = "land";
  function categorizeCountries(countriesArray, finder) {
    return countriesArray.filter((x) => x.includes(finder));
  }

  console.log(categorizeCountries(countries, commonPattern));
}
