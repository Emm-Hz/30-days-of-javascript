"use strict";

function levelOne() {
  // Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
  var text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
  var sum = text.match(/\d+/g);
  console.log(sum.reduce(function (a, next) {
    return parseInt(a) + parseInt(next);
  }, 0) / sum.length); // The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

  var nextText = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";
  var find = nextText.match(/.\d+/g);
  console.log(find);
  var count = 0;

  for (var i = parseInt(find[0]); i < find.length; i++) {
    count++;
  }

  console.log(count); // Write a pattern which identify if a string is a valid JavaScript variable

  var isValid = /[-+]|^[\d]/gi;
  var testing = ["variable-java", "varaibleJava", "1variable_java", "varialbe_Java"];

  for (var _i = 0; _i < testing.length; _i++) {
    console.log(!isValid.test(testing[_i]));
  }
}

function levelTwo() {
  // Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
  var paragraph = "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.";

  function tenMostFrequentWords(textToFind, num) {
    var strArr = textToFind.split(" ");
    var map = {};
    strArr.forEach(function (word) {
      if (map.hasOwnProperty(word)) {
        map[word]++;
      } else {
        map[word] = 1;
      }
    });
    var frequencyArr = Object.keys(map).map(function (key) {
      return [key, map[key]];
    });
    frequencyArr.sort(function (a, b) {
      return b[1] - a[1];
    });
    return frequencyArr.slice(0, num).map(function (el) {
      return el[0];
    });
  }

  console.log(tenMostFrequentWords(paragraph, 10));
}

function levelThree() {
  // Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
  var sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?";
  var newText = sentence.replace(/[%$!@#^&*;,.?]/g, "");
  console.log(newText);

  function findMostFrequent(str, num) {
    var strArr = str.split(" ");
    var map = {};
    strArr.forEach(function (word) {
      if (map.hasOwnProperty(word)) {
        map[word]++;
      } else {
        map[word] = 1;
      }
    });
    var frequencyArr = Object.keys(map).map(function (key) {
      return [key, map[key]];
    });
    frequencyArr.sort(function (a, b) {
      return b[1] - a[1];
    });
    return frequencyArr.slice(0, num).map(function (el) {
      return el[0];
    });
  }

  console.log(findMostFrequent(newText, 3));
}