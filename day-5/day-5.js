function levelOne() {
  // 1. Declare an empty array;

  const emptyArray = [];

  // 2. Declare an array with more than 5 number of elements

  var elements = [1, 2, 3, 4, 5, 6];

  // 3. Find the length of your array

  console.log(elements.length);

  // 4. Get the first item, the middle item and the last item of the array

  console.log(elements[0] + "," + elements[2] + "," + elements[5]);

  // 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

  let mixedDataTypes = [1, "Hello", true, NaN, 5, "World"];

  // 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

  const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];

  // 7. Print the array using console.log()
  console.log(itCompanies);

  // 8. Print the number of companies in the array
  console.log(itCompanies.length);

  // 9. Print the first company, middle and last company
  console.log(itCompanies[0] + "," + itCompanies[2] + "," + itCompanies[5]);

  // 10. Print out each company
  itCompanies.forEach((print) => console.log(print));

  // 11. Change each company name to uppercase one by one and print them out
  for (let i = 0; i < itCompanies.length; i++) {
    const company = itCompanies[i].toUpperCase();
    console.log(company);
  }

  // 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
  console.log(itCompanies.toString());

  // 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
  /* let findCompany = prompt("Require a company name", "Include a company name");
itCompanies.indexOf(findCompany) >= 0
  ? console.log(findCompany)
  : console.log("Not found"); */

  // 14. Filter out companies which have more than one 'o' without the filter method
  let coompanies = [];
  for (let i = 0; i < itCompanies.length; i++) {
    let letterFinder = itCompanies[i].split("");
    let counter = 0;
    for (let index = 0; index < letterFinder.length; index++) {
      if (letterFinder[index] == "o") counter++;
    }
    if (counter >= 2) coompanies.push(itCompanies[i]);
    counter = 0;
  }
  console.log(coompanies);

  // 15. Sort the array using sort() method
  let companiesOrdered = itCompanies.slice();
  console.log(companiesOrdered.sort());

  // 16. Reverse the array using reverse() method
  console.log(companiesOrdered.reverse());

  // 17. Slice out the first 3 companies from the array
  console.log(itCompanies.slice(0, 3));

  // 18. Slice out the last 3 companies from the array
  console.log(itCompanies.slice(itCompanies.length - 3));

  // 19. Slice out the middle IT company or companies from the array
  console.log(itCompanies.slice(1, itCompanies.length - 1));

  // 20. Remove the first IT company from the array
  let takeOut = itCompanies.slice();
  console.log(takeOut.shift());

  // 21. Remove the middle IT company or companies from the array
  let middelOut = itCompanies.slice();
  console.log(middelOut.splice(itCompanies.length / 2, 1));

  // 22. Remove the last IT company from the array
  let lastOut = itCompanies.slice();
  console.log(lastOut.pop());

  // 23. Remove all IT companies
  console.log(itCompanies.splice());
}

function levelTwo() {
  // 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
  console.log(countries, webTechs);

  // 2. First remove all the punctuations and change the string to array and count the number of words in the array
  let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

  let arrayWords = text.replace(/[.,]/g, "");
  arrayWords = arrayWords.split(" ");

  console.log(arrayWords);
  console.log(arrayWords.length);

  // 3. In the following shopping cart add, remove, edit items
  const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

  // 3.1. add 'Meat' in the beginning of your shopping cart if it has not been already added
  shoppingCart.includes("Meat")
    ? console.log("Already in the shopping cart")
    : shoppingCart.unshift("Meat");

  console.log(shoppingCart);

  // 3.2. add Sugar at the end of you shopping cart if it has not been already added
  shoppingCart.includes("Sugar")
    ? console.log("Already in the shopping cart")
    : shoppingCart.push("Sugar");

  console.log(shoppingCart);

  // 3.3. remove 'Honey' if you are allergic to honey
  shoppingCart.includes("Honey")
    ? shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
    : console.log("There is no Honey in the cart");

  console.log(shoppingCart);

  // 3.4. modify Tea to 'Green Tea'
  shoppingCart.includes("Tea")
    ? shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea")
    : console.log("There is no Tea in the cart");

  console.log(shoppingCart);

  // 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
  countries.includes("Ethiopia")
    ? console.log("ETHIOPIA")
    : countries.push("Ethiopia");

  // 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
  webTechs.includes("Sass")
    ? console.log("Sass is a CSS preprocess")
    : webTechs.push("Sass");

  console.log(webTechs);

  // 6. Concatenate the following two variables and store it in a fullStack variable.
  const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
  const backEnd = ["Node", "Express", "MongoDB"];

  let fullStack = frontEnd.concat(backEnd);
  console.log(fullStack);
}

// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1.1. Sort the array and find the min and max age
let ageArrays = ages.slice();
ageArrays.sort();
let minAge = ageArrays[0];
let maxAge = ageArrays[0];

for (let i = 0; i < ageArrays.length; i++) {
  if (minAge > ageArrays[i]) {
    minAge = ageArrays[i];
  } else if (maxAge < ageArrays[i]) {
    maxAge = ageArrays[i];
  }
}

console.log("Younger: " + minAge + ", Older: " + maxAge);

// 1.2. Find the median age(one middle item or two middle items divided by two)
let medianAge = 0;

ages.length % 2 == 0
  ? console.log((ages[ages.length / 2] + ages[ages.length / 2 - 1]) / 2)
  : console.log(parseInt(ages[ages.length / 2]));

// 1.3. Find the average age(all items divided by number of items)
let initialVal = 0;

let averageAge = ages.reduce(
  (prevVal, currVal) => prevVal + currVal,
  initialVal
);

averageAge = averageAge / ages.length;
console.log(averageAge);

// 1.4. Find the range of the ages(max minus min)
console.log(`The range of the ages is ${maxAge - minAge}`);

// 1.5. Compare the value of (min - average) and (max - average), use abs() method
function compare(val, average) {
  return Math.abs(val - average);
}

console.log(compare(minAge, averageAge));
console.log(compare(maxAge, averageAge));

// 2. Slice the first ten countries from the countries array
let tenCountries = countries.slice(0, 10);

console.log(tenCountries);
console.log(countries);

// 3. Find the middle country(ies) in the countries array
countries.length % 2 == 0
  ? console.log(
      (countries[countries.length / 2] + countries[countries.length / 2 - 1]) /
        2
    )
  : console.log(countries[parseInt(countries.length / 2)]);

// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countriesFirst = [];
let countriesSecond = [];

if (countries.length % 2 == 0) {
  countriesFirst.push(countries.slice(0, parseInt(countries.length / 2)));

  countriesSecond.push(countries.slice(parseInt(countries.length / 2)));
} else {
  countriesFirst.push(countries.slice(0, parseInt(countries.length / 2 + 1)));

  countriesSecond.push(countries.slice(parseInt(countries.length / 2 + 1)));
}

console.log(countriesFirst);
console.log(countriesSecond);
