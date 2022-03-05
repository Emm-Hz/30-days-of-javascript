function levelOne() {
  // 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
  let userAge = prompt("Require your age", "Insert your age");

  console.log(
    userAge >= 18
      ? "You are old enough to drive."
      : "You are left with 3 years to drive."
  );

  // 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
  let myAge = 27;

  if (userAge > myAge) {
    console.log(`You are ${userAge - myAge} years older than me.`);
  } else {
    console.log(`You are ${myAge - userAge} years younger than me.`);
  }

  // 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

  let a = 4;
  let b = 3;

  // 3.1. using if else
  if (a > b) {
    console.log("a is greater than b");
  } else {
    console.log("a is less than b");
  }

  // 3.2. ternary operator.
  a > b ? console.log("a is greater than b") : console.log("a is less than b");

  // 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
  let isEven = prompt("Require number", "Insert number");

  isEven % 2 == 0
    ? console.log(`${isEven} is an even number`)
    : console.log(`${isEven} is an odd number.`);
}

function levelTwo() {
  // 1. Write a code which can give grades to students according to theirs scores:
  // 80-100, A
  // 70-89, B
  // 60-69, C
  // 50-59, D
  // 0-49, F

  let studenScores = parseInt(
    prompt("Require student score", "Add sudent score")
  );

  switch (true) {
    case studenScores >= 80 && studenScores <= 100:
      console.log("A");
      break;
    case studenScores >= 70 && studenScores <= 79:
      console.log("B");
      break;
    case studenScores >= 60 && studenScores <= 69:
      console.log("C");
      break;
    case studenScores >= 50 && studenScores <= 59:
      console.log("D");
      break;
    case studenScores >= 0 && studenScores <= 49:
      console.log("F");
      break;
    default:
      console.log("Invalid score");
      break;
  }

  // 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  // -->September, October or November, the season is Autumn.
  // -->December, January or February, the season is Winter.
  // -->March, April or May, the season is Spring
  // -->June, July or August, the season is Summer

  let month = prompt("Require month", "Insert month");

  switch (true) {
    case month == ("September" || "Octuber" || "November"):
      console.log("Autumn");
      break;
    case month == ("December" || "January" || "February"):
      console.log("Winter");
      break;
    case month == ("March" || "April" || "May"):
      console.log("Spring");
      break;
    case month == ("June" || "July" || "August"):
      console.log("Summer");
      break;
    default:
      console.log("Invalid month");
      break;
  }

  // 3. Check if a day is weekend day or a working day. Your script will take day as an input.

  let dayWeek = prompt("Require day of the week", "Insert day of the week");
  let dayOfWeek =
    dayWeek.charAt(0).toUpperCase() + dayWeek.slice(1).toLowerCase();

  dayWeek.toLowerCase() == "saturday" || dayWeek.toLowerCase() == "sunday"
    ? console.log(`${dayOfWeek} is a weekend`)
    : console.log(`${dayOfWeek} is a day of work`);
}

function levelThree() {
  // 1. Write a program which tells the number of days in a month.
  // 1.1. Write a program which tells the number of days in a month, now consider leap year.
  let monthInsert = prompt("Require month", "Insert month");
  let month =
    monthInsert.charAt(0).toUpperCase() + monthInsert.slice(1).toLowerCase();
  let leapYear = new Date().getFullYear;

  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "Octuber":
    case "December":
      console.log(`${month} has 31 days`);
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log(`${month} has 30 days`);
      break;
    case "February":
      (leapYear % 4 == 0 && leapYear % 100 != 0) || leapYear % 400 == 0
        ? console.log(`${month} has 29 days`)
        : console.log(`${month} has 28 days`);
      break;
    default:
      console.log("Invalid month");
      break;
  }
}
