let fullArray = [0, 1, 2, 3, 4, 5];
let fruit = ["Avocado", "Tomato", "Potato", "Mango", "LEMON", "Carrot"];

function levelOne() {
  // Declare a function fullName and it print out your full name.
  function fullName() {
    return "Emmanuel Higuera";
  }

  console.log(fullName());

  // Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
  function newFullName(name, lastName) {
    return name + " " + lastName;
  }

  console.log(newFullName("Emmanuel", "Higuera"));

  // Declare a function addNumbers and it takes two two parameters and it returns sum.
  function addNumbers(a, b) {
    return a + b;
  }

  console.log(addNumbers(3, 8));

  // An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
  function areaOfRectangle(length, width) {
    return length * width;
  }

  console.log(areaOfRectangle(2, 4));

  // A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
  function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
  }

  console.log(perimeterOfRectangle(4, 8));

  // A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
  function volumeOfRectPrism(length, width, height) {
    return length * width * height;
  }

  console.log(volumeOfRectPrism(2, 5, 3));

  // Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
  let pi = 3.14;
  function areaOfCircle(radio) {
    return pi * radio * radio;
  }

  console.log(areaOfCircle(4));

  // Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
  function circumference(radio) {
    return 2 * pi * radio;
  }

  console.log(circumference(2));

  // Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
  function density(mass, volume) {
    return mass / volume;
  }

  console.log(density(4, 7));

  // Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
  function speed(distance, time) {
    return distance / time;
  }

  console.log(speed(30, 5));

  // Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
  let gravity = 9.8;
  function weight(mass) {
    return mass * gravity;
  }

  console.log(weight(4));

  // Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
  function convertCelsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
  }

  console.log(convertCelsiusToFahrenheit(20));

  // Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
  // The same groups apply to both men and women.
  // Underweight: BMI is less than 18.5
  // Normal weight: BMI is 18.5 to 24.9
  // Overweight: BMI is 25 to 29.9
  // Obese: BMI is 30 or more
  let bmi = 0;
  function bodyMassIndex(weight, height) {
    return (bmi = weight / (height * height));
  }

  bodyMassIndex(89, 1.78);
  switch (true) {
    case bmi < 18.5:
      console.log("Underweight");
      break;
    case bmi >= 18.5 && bmi <= 24.9:
      console.log("Normal weight");
      break;
    case bmi >= 25 && bmi <= 29.9:
      console.log("Overweight");
      break;
    case bmi >= 30:
      console.log("Obese");
      break;
    default:
      console.log("invalid value");
      break;
  }

  // Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
  function checkSeason(month) {
    switch (month) {
      case "September":
      case "Octuber":
      case "November":
        return "Autumn";

      case "December":
      case "January":
      case "February":
        return "Winter";

      case "March":
      case "April":
      case "May":
        return "Spring";

      case "June":
      case "July":
      case "August":
        return "Summer";

      default:
        return "Invalid month";
    }
  }

  console.log(checkSeason("November"));

  // Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
  function findMax(a, b, c) {
    if (a > b && a > c) return a;
    if (b > a && b > c) return b;
    return c;
  }

  console.log(findMax(-2, 0, -1));
}

function levelTwo() {
  // Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
  function solveLinEquation(a, b, c, x, y) {
    return a * x + b * y + c;
  }

  console.log(solveLinEquation(2, 4, 3, 2, 1));
  // Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
  function solveQuadEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;

    // condition for real and different roots
    if (discriminant > 0) {
      root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

      // result
      console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    // condition for real and equal roots
    else if (discriminant == 0) {
      root1 = root2 = -b / (2 * a);

      // result
      return `The roots of quadratic equation are ${root1} and ${root2}`;
    }

    // if roots are not real
    else {
      let realPart = (-b / (2 * a)).toFixed(2);
      let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

      // result
      return `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
    }
  }

  console.log(solveQuadEquation(1, 4, 4));
  // Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
  function printArray(array) {
    for (let name of array) {
      console.log(name);
    }
  }

  printArray(fullArray);

  // Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
  function showDateTime() {
    let time = new Date();

    console.log(
      `${time.getDate()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
    );
  }

  showDateTime();

  // Declare a function name swapValues. This function swaps value of x to y.
  function swapValues(a, b) {
    let c = a;
    a = b;
    b = c;

    console.log(`${a},${b}`);
  }

  swapValues(2, 4);
  // Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
  function reverseArray(element) {
    let newArray = [];
    for (let i = element.length - 1; i >= 0; i--) {
      newArray.push(element[i]);
    }
    return newArray;
  }

  console.log(reverseArray(fullArray));

  // Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

  function capitalizeArray(capitalize) {
    let capArr = [];

    for (let name of capitalize) {
      capArr.push(name.toUpperCase());
    }

    return capArr;
  }

  console.log(capitalizeArray(fruit));

  // Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
  function addItem(item) {
    fruit.push(item);
  }

  addItem("Apple");
  console.log(fruit);

  // Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
  function removeItem(item) {
    let location = fruit.indexOf(item);
    fruit.splice(location, 1);
  }

  removeItem("Apple");
  console.log(fruit);

  // Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
  function sumOfNumbers(numbers) {
    return numbers.reduce((prevVal, currVal) => currVal + prevVal);
  }

  console.log(sumOfNumbers(fullArray));

  // Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
  function sumOfOdds(numbers) {
    return numbers
      .filter((actVal) => actVal % 2 == 1)
      .reduce((prevVal, currVal) => currVal + prevVal);
  }

  console.log(sumOfOdds(fullArray));

  // Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
  function sumOfEven(numbers) {
    return numbers
      .filter((actVal) => actVal % 2 == 0)
      .reduce((prevVal, currVal) => currVal + prevVal);
  }

  console.log(sumOfEven(fullArray));

  // Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
  let even = 0;
  let odd = 0;
  function evensAndOdds(numbers) {
    for (let i = 0; i <= numbers; i++) {
      i % 2 == 0 ? even++ : odd++;
    }
  }

  evensAndOdds(100);
  console.log(
    "The number of odds are: " + odd + ". The number of evens are: " + even
  );

  // Write a function which takes any number of arguments and return the sum of the arguments
  function sumAll(...args) {
    return args.reduce((prevValue, currVale) => prevValue + currVale);
  }

  console.log(sumAll(2, 3, 5, 6, 10));

  // Writ a function which generates a randomUserIp.
  function randomUserIp() {
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

    return id;
  }

  // TODO console.log(randomUserIp());

  // Write a function which generates a randomMacAddress
  function randomMacAddress() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x90)
        .toString(16)
        .substring(0);
    };

    return `${s4()}:${s4()}:${s4()}:${s4()}:${s4()}:${s4()}`;
  }

  console.log(randomMacAddress());

  // Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
  function randomHexaNumberGenerator() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x900000)
        .toString(16)
        .substring(0);
    };

    return "#" + s4();
  }

  console.log(randomHexaNumberGenerator());

  // Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
  function userIdGenerator() {
    let letters =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");

    let chain = 7;

    let id = "";

    for (let i = 0; i < chain; i++) {
      id += letters[parseInt(Math.random() * letters.length)];
    }

    return id;
  }

  console.log(userIdGenerator());
}

// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function randomUserIp() {
  let letters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");

  function userIdGeneratedByUser() {
    numCharacters = prompt(
      "Requiere number of characters",
      "Insert number of characters"
    );
    numId = prompt(
      "Requiere number of the id chain",
      "Insert number of the id chain"
    );

    return numCharacters, numId;
  }

  userIdGeneratedByUser();

  let numberOfTime = 0;

  while (numberOfTime < numId) {
    let id = "";
    for (let i = 0; i < numCharacters; i++) {
      id += letters[parseInt(Math.random() * letters.length)];
    }
    numberOfTime++;
    console.log(id);
  }
}

// TODO randomUserIp();

// Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  let s3 = () => {
    return Math.floor((1 + Math.random()) * 0x82)
      .toString(10)
      .substring(0);
  };

  console.log("rgb(" + s3() + "," + s3() + "," + s3() + ")");
}

rgbColorGenerator();

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(number) {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x900000)
      .toString(16)
      .substring(0);
  };

  let arrHexa = [];

  for (let i = 0; i < number; i++) {
    arrHexa.push(`#${s4()}`);
  }

  return arrHexa;
}

console.log(arrayOfHexaColors(5));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(number) {
  let s3 = () => {
    return Math.floor((1 + Math.random()) * 0x82)
      .toString(10)
      .substring(0);
  };

  let arrRgb = [];

  for (let i = 0; i < number; i++) {
    arrRgb.push("rgb(" + s3() + "," + s3() + "," + s3() + ")");
  }

  return arrRgb;
}

console.log(arrayOfRgbColors(4));

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function hexToRgb(hex) {
  if (/^#([a-f0-9]{3}){1,2}$/.test(hex)) {
    if (hex.length == 4) {
      hex = "#" + [hex[1], hex[1], hex[2], hex[2], hex[3], hex[3]].join("");
    }
    var c = "0x" + hex.substring(1);
    return "rgb(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ")";
  }
}

console.log(hexToRgb("#a0be66"));

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa() {
  var a = "rgb(0,255,255)".split("(")[1].split(")")[0];
  a = a.split(",");
  var b = a.map(function (x) {
    //For each array element
    x = parseInt(x).toString(16); //Convert to a base16 string
    return x.length == 1 ? "0" + x : x; //Add zero if we get only one character
  });
  b = "#" + b.join("");

  return b;
}

console.log(convertRgbToHexa());
// Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(color, quantity) {
  var letters = "0123456789ABCDEF";
  var numbers = "0123456789";

  let colorArray = [];
  let rgbArray = [];

  if (color == "hexa") {
    let k = 0;
    while (k < quantity) {
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      k++;
      colorArray.push(color);
    }
    return colorArray;
  }

  if (color == "rgb") {
    let k = 0;
    while (k < quantity) {
      var rgb = "rgb(";

      for (let j = 0; j < 3; j++) {
        for (var i = 0; i < 3; i++) {
          rgb += numbers[Math.floor(Math.random() * 3)];
        }
        rgb += ",";
      }
      k++;
      rgbArray.push((rgb += ")"));
    }
    return rgbArray;
  }
}

console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
