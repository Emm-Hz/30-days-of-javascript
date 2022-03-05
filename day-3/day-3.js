function level_1() {
  // 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
  var firstName = "Peter";
  var lastName = "Parker";
  var country = "USA";
  var city = "Broklyn";
  var age = 23;
  var isMarried = false;
  var year = 2021;

  console.log(typeof firstName);
  console.log(typeof lastName);
  console.log(typeof country);
  console.log(typeof city);
  console.log(typeof age);
  console.log(typeof isMarried);
  console.log(typeof year);

  // 2. Check if type of '10' is equal to 10
  console.log(typeof "10" == 10);

  // 3. Check if parseInt('9.8') is equal to 10
  console.log(parseInt("9.8") == 10);

  // 4. Boolean value is either true or false.
  // 4.1. Write three JavaScript statement which provide truthy value.
  // 4.2. Write three JavaScript statement which provide falsy value.
  console.log(10 == 10);
  console.log("a" == "a");
  console.log(parseInt("9.8") == 9);

  console.log(typeof "10" == 10);
  console.log(parseInt("9.8") == 10);
  console.log(typeof isMarried == typeof age);

  /* 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() */
  console.log(4 > 3);
  console.log(4 >= 3);
  console.log(4 < 3);
  console.log(4 <= 3);
  console.log(4 == 4);
  console.log(4 === 4);
  console.log(4 != 4);
  console.log(4 !== 4);
  console.log(4 != "4");
  console.log(4 == "4");
  console.log(4 === "4");
  console.log("python".length !== "jargon".length);

  // 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
  console.log(4 > 3 && 10 < 12);
  console.log(4 > 3 && 10 > 12);
  console.log(4 > 3 || 10 < 12);
  console.log(4 > 3 || 10 > 12);
  console.log(!(4 > 3));
  console.log(!(4 < 3));
  console.log(!false);
  console.log(!(4 > 3 && 10 < 12));
  console.log(!(4 > 3 && 10 > 12));
  console.log(!(4 === "4"));
  console.log(!"python".match(/[on]/));
  console.log(!"dragon".match(/[on]/));

  // 7. Use the Date object to do the following activities
  var date = new Date();

  // 7.1. What is the year today?
  console.log(date.getFullYear());

  // 7.2. What is the month today as a number?
  console.log(date.getMonth());

  // 7.3. What is the date today?
  console.log(date.getDate());

  // 7.4. What is the day today as a number?
  console.log(date.getDay());

  // 7.5. What is the hours now?
  console.log(date.getHours());

  // 7.6. What is the minutes now?
  console.log(date.getMinutes());

  // 7.7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
  console.log(date.getTime());
}

function level_2() {
  // 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
  let base = prompt("require base", "Insert base");
  let height = prompt("require height", "Insert height");
  let area = 0.5 * base * height;

  console.log(`The area of the triangle is ${area}`);

  // 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

  let sideA = prompt("require side A", "Insert side A");
  let sideB = prompt("require side B", "Insert side B");
  let sideC = prompt("require side C", "Insert side C");
  let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);

  console.log("The perimeter of the triangle is " + perimeter);

  // 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

  let length = prompt("require length", "Insert length");
  let width = prompt("require width", "Insert width");
  let areaSquare = length * width;
  let perimeterSquare = 2 * (parseInt(length) + parseInt(width));

  console.log("The area of the square is " + areaSquare);
  console.log(`The perimeter of the square is ${perimeterSquare}`);

  // 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

  let pi = 3.14;
  let radius = prompt("Require radius", "Insert radius");

  let areaCircle = pi * radius ** 2;
  let circumference = 2 * pi * radius;

  console.log(`The area of the circle is ${areaCircle}`);
  console.log(`The circumference of the circle is ${circumference}`);

  // 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
  let x = prompt("Require x", "Insert x");
  let y = 2 * x - 2;

  console.log(`The slope of y=2x-2 is ${y}`);

  // 6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
  let xOne = prompt("Require xOne", "Insert xOne");
  let xTwo = prompt("Require xTwo", "Insert xTwo");
  let yOne = prompt("Require yOne", "Insert yOne");
  let yTwo = prompt("Require yTwo", "Insert yTwo");

  let mValue = yTwo - yOne / xTwo - xOne;

  console.log(`The slope of m = y2-y1/x2-x1 is ${mValue}`);

  // 7. Compare the slope of above two questions.
  console.log(y === mValue);

  // 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

  let xValue = prompt("Require x Value", "Insert x Value");

  let yValue = xValue ** 2 + 6 * xValue + 9;

  console.log(`The value of y is ${yValue}`);

  // 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

  let hoursWorked = prompt("Require Worked worked", "Insert hours worked");
  let rate = prompt("Require rate per hour", "Insert rate per hour");

  let earning = hoursWorked * rate;

  console.log(`Your weekly earning is ${earning}`);

  // 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

  let name = prompt("Require your name", "Insert your name");

  console.log(name.length > 7 ? "Your name is long" : "Your name is short");

  // 11. Compare your first name length and your family name length and you should get this output.

  let firstName = "Asabeneh";
  let lastName = "Yetayeh";

  console.log(
    firstName.length > lastName.length
      ? "Your first name, Asabeneh is longer than your family name, Yetayeh"
      : "Your first name, Asabeneh is shorter than your family name, Yetayeh"
  );

  // 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
  let myAge = 250;
  let yourAge = 25;

  console.log(`I am ${myAge - yourAge} years older than you.`);

  // 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
  let yearBorn = prompt(
    "Require the year you born",
    "Insert the year that you born"
  );

  let actualYear = new Date().getFullYear();

  console.log(
    actualYear - yearBorn >= 18
      ? `You are ${actualYear - yearBorn}. You are old enough to drive`
      : `You are ${actualYear - yearBorn}. You will be allowed to drive after ${
          18 - (actualYear - yearBorn)
        } years.`
  );

  // 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
  let yearsLived = prompt("Require your age", "Insert your age");

  console.log(`You lived ${yearsLived * 31536000} seconds`);

  // 15. Create a human readable time format using the Date time object

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // 15.1. YYYY-MM-DD HH:mm
  console.log(`${year}-${month}-${date} ${hours}:${minutes}`);

  // 15.2. DD-MM-YYYY HH:mm
  console.log(`${date}-${month}-${year} ${hours}:${minutes}`);

  // 15.3. DD/MM/YYYY HH:mm
  console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
}

function level_3() {
  // 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
  let time = new Date();

  let yearAct = time.getFullYear();
  let monthAct = time.getMonth();
  let dateAct = time.getDate();
  let hourAct = String(time.getHours()).padStart(2, "0");
  let minutesAct = String(time.getMinutes()).padStart(2, "0");

  console.log(`${yearAct}-${monthAct}-${dateAct} ${hourAct}:${minutesAct}`);
}
