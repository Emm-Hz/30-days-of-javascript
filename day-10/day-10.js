const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
import { countries } from "../countries_data.js";

function levelOne() {
  // create an empty set
  const empty = new Set();

  console.log(empty);

  // Create a set containing 0 to 10 using loop
  const element = new Set();

  for (let i = 0; i <= 10; i++) {
    element.add(i);
  }

  console.log(element);

  // Remove an element from a set
  element.delete(4);
  console.log(element);

  // Clear a set
  element.clear();
  console.log(element);

  // Create a set of 5 string elements from array
  const company = ["Google", "Facebook", "Instagram", "Whatsapp", "Uber"];

  const fiveElements = new Set(company);

  console.log(fiveElements);

  // Create a map of countries and number of characters of a country
  const countriesNum = [
    ["Spain", 5],
    ["Mexico", 6],
    ["Peru", 4],
    ["Venezuela", 9],
  ];

  const mapCountries = new Map(countriesNum);

  console.log(mapCountries);
}

function levelTwo() {
  // Find a union b
  let union = [...a, ...b];

  const elementC = new Set(union);

  console.log(elementC);

  // Find a intersection b
  let elementA = new Set(a);
  let elementB = new Set(b);

  let intersection = a.filter((number) => elementB.has(number));

  console.log(intersection);
}

// How many languages are there in the countries object file.
let count = 0;

for (let name of countries) {
  count += Object.values(name.languages).length;
}

console.log(count);

// *** Use the countries data to find the 10 most spoken languages:
const languages = [];

for (const name of countries) {
  const filterCountries = countries.filter(
    (element) => element.languages === name.languages
  );
  languages.push({ [name.languages]: filterCountries.length });
}
