import { countries } from "./../countries_data.js";

function levelOne() {
  // Display the countries array as a table
  console.table(countries);

  // Use console.group() to group logs
  console.group("Logs");
  console.log("Hello");
  console.log("World");
  console.log("This is a group");
  console.groupEnd();
}

function levelTwo() {
  // 10 > 2 * 10 use console.assert()
  console.assert(10 > 2 * 10, "10 is not bigger than 2*10");

  // Write a warning message using console.warn()
  console.warn("DANGER");

  // Write an error message using console.error()
  console.error("There is a error");
}

function levelThree() {
  // Check the speed difference among the following loops: while, for, for of, forEach

  const countriesLocal = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
  ];

  console.time("While loop");
  let i = 0;
  while (i < countriesLocal.length) {
    console.log(countriesLocal[i][0], countriesLocal[i][1]);
    i++;
  }
  console.timeEnd("While loop");

  console.time("Regular for loop");
  for (let i = 0; i < countriesLocal.length; i++) {
    console.log(countriesLocal[i][0], countriesLocal[i][1]);
  }
  console.timeEnd("Regular for loop");

  console.time("for of loop");
  for (const [name, city] of countriesLocal) {
    console.log(name, city);
  }
  console.timeEnd("for of loop");

  console.time("forEach loop");
  countriesLocal.forEach(([name, city]) => {
    console.log(name, city);
  });
  console.timeEnd("forEach loop");
}
