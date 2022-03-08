const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

function levelOne() {
  // 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

  for (let i = 0; i < 11; i++) {
    console.log(i);
  }

  let j = 0;

  while (j < 11) {
    console.log(j);
    j++;
  }

  let h = 0;

  do {
    console.log(h);
    h++;
  } while (h < 11);

  // 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }

  j = 10;
  while (j >= 0) {
    console.log(j);
    j--;
  }

  h = 10;
  do {
    console.log(h);
    h--;
  } while (h >= 0);

  // 3. Iterate 0 to n using for loop

  let nVal = prompt("Require number of loops", "Insert numbers of loop");

  for (let i = 0; i < nVal; i++) {
    console.log(i);
  }

  // 4. Write a loop that makes the following pattern using console.log():

  for (let line = "#"; line.length < 8; line = line.concat("#"))
    console.log(line);

  // 5. Use loop to print the following pattern:

  for (let i = 0; i < 11; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
  }

  // 6. Using loop print the following pattern

  console.log("i\t\ti^2\t\ti^3");
  for (let i = 0; i < 11; i++) {
    console.log(`${i}\t\t${i ** 2}\t\t${i ** 3}`);
  }

  // 7. Use for loop to iterate from 0 to 100 and print only even numbers

  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) console.log(i);
  }

  // 8. Use for loop to iterate from 0 to 100 and print only odd numbers

  for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) console.log(i);
  }

  // 9. Use for loop to iterate from 0 to 100 and print only prime numbers

  for (let i = 1; i <= 100; i++) {
    let cnt = 0;
    for (let x = 1; x <= 100; x++) {
      if (i === 1) {
        break;
      }
      if (i % x === 0 && i % 1 === 0) {
        cnt++;
      }
      if (cnt > 2) {
        break;
      }
    }
    if (cnt === 2) {
      console.log(i);
      continue;
    }
  }

  // 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }

  console.log("The sum of all numbers from 0 to 100 is " + sum);

  // 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  let even = 0;
  let odd = 0;

  for (let i = 0; i <= 100; i++) {
    i % 2 == 0 ? (even += i) : (odd += i);
  }

  console.log(
    `The sum of all evens from 0 to 100 is ${even} . And the sum of all odds from 0 to 100 is ${odd}.`
  );

  // 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
  console.log([even, odd]);

  // 13. Develop a small script which generate array of 5 random numbers
  let randomNumbers = [];

  for (let i = 0; i < 5; i++) {
    randomNumbers.push(parseInt(Math.random() * 10));
  }

  console.log(randomNumbers);

  // 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
  let randomUnique = [];

  for (let i = 0; i < 10; i++) {
    let unique = parseInt(Math.random() * 10);

    if (!randomUnique.includes(unique)) randomUnique.push(unique);
    if (randomUnique.length == 5) break;
  }

  console.log(randomUnique);
  // 15. Develop a small script which generate a six characters random id:

  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x100000)
      .toString(16)
      .substring(0);
  };

  console.log(s4());
}

function levelTwo() {
  // 1. Develop a small script which generate any number of characters random id:

  let letters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");

  let chain = prompt(
    "Requiere number of the id chain",
    "Insert number of the id chain"
  );

  let id = "";

  for (let i = 0; i < chain; i++) {
    id += letters[parseInt(Math.random() * letters.length)];
  }

  console.log(id);

  // 2. Write a script which generates a random hexadecimal number.

  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x900000)
      .toString(16)
      .substring(0);
  };

  console.log("#" + s4());

  // 3. Write a script which generates a random rgb color number.
  let s3 = () => {
    return Math.floor((1 + Math.random()) * 0x90)
      .toString(10)
      .substring(0);
  };

  console.log("rgb(" + s3() + "," + s3() + "," + s3() + ")");

  // 4. Using the above countries array, create the following new array.
  let countriesArray = [];
  for (let name of countries) {
    countriesArray.push(name.toUpperCase());
  }

  console.log(countriesArray);

  // 5. Using the above countries array, create an array for countries length'.
  let countriesLength = [];

  for (let name of countries) {
    countriesLength.push(name.length);
  }

  console.log(countriesLength);

  // 6. Use the countries array to create the following array of arrays
  let especialArray = [];
  for (let name of countries) {
    especialArray.push([
      name.toUpperCase(),
      name.slice(0, 3).toUpperCase(),
      name.length,
    ]);
  }

  console.log(especialArray);

  // 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
  let land = [];

  for (let name of countries) {
    name.match(/land/)
      ? land.push(name)
      : console.log("All these countries are without land");
  }

  console.log(land);

  // 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
  let iaCountries = [];

  for (let name of countries) {
    name.match(/ia/)
      ? iaCountries.push(name)
      : console.log("These are countries ends without ia");
  }

  console.log(iaCountries);

  // 9. Using the above countries array, find the country containing the biggest number of characters.
  let countrieName = "";
  let longeCountryName = 0;

  for (let name of countries) {
    if (longeCountryName < name.length) {
      countrieName = name;
      longeCountryName = name.length;
    }
  }

  console.log(countrieName);

  // 10. Using the above countries array, find the country containing only 5 characters.
  let fiveLongName = [];

  for (let name of countries) {
    if (name.length == 5) fiveLongName.push(name);
  }

  console.log(fiveLongName);

  // 11. Find the longest word in the webTechs array
  let webTechsWord = "";
  let longeWebTechs = 0;

  for (let name of webTechs) {
    if (longeWebTechs < name.length) {
      webTechsWord = name;
      longeWebTechs = name.length;
    }
  }

  console.log(webTechsWord);

  // 12. Use the webTechs array to create the following array of arrays
  let webTechsArray = [];

  for (let name of webTechs) {
    webTechsArray.push([name, name.length]);
  }

  console.log(webTechsArray);

  // 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
  let acronym = "";

  for (let name of mernStack) {
    acronym += name[0];
  }

  console.log(acronym);

  // 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
  for (let name of webTechs) {
    console.log(name);
  }

  // 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
  let fruit = ["banana", "orange", "mango", "lemon"];
  let reverseFruit = [];
  for (let i = fruit.length - 1; i >= 0; i--) {
    reverseFruit.push(fruit[i]);
  }

  console.log(reverseFruit);

  // 16. Print all the elements of array as shown below.
  const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
  ];

  for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
      console.log(fullStack[i][j]);
    }
  }
}

const countriesLongList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

function levelThree() {
  // 1. Copy countries array(Avoid mutation)
  let countriesCopy = countriesLongList.slice();

  // 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
  let sortedCountries = countriesLongList.slice().sort();

  // 3. Sort the webTechs array and mernStack array
  webTechs.sort();
  mernStack.sort();

  // 4. Extract all the countries contain the word 'land' from the countries array and print it as array
  let countriesLand = [];
  for (let name of sortedCountries) {
    if (name.match(/land/)) countriesLand.push(name);
  }

  console.log(countriesLand);

  // 5. Find the country containing the hightest number of characters in the countries array
  let longName = "";
  let bigNumber = 0;

  for (let name of sortedCountries) {
    if (bigNumber < name.length) {
      longName = name;
      bigNumber = name.length;
    }
  }

  console.log(longName);

  // 6. Extract all the countries containing only four characters from the countries array and print it as array
  let fourLongName = [];

  for (let name of sortedCountries) {
    if (name.length == 4) fourLongName.push(name);
  }

  console.log(fourLongName);

  // 7. Extract all the countries containing two or more words from the countries array and print it as array
  let twoNames = [];
  for (let name of sortedCountries) {
    if (name.match(/\s/)) twoNames.push(name);
  }

  console.log(twoNames);

  // 8. Reverse the countries array and capitalize each country and stored it as an array
  let reverseCountries = sortedCountries
    .reverse()
    .map((upper) => upper.toUpperCase());

  console.log(reverseCountries);
}
