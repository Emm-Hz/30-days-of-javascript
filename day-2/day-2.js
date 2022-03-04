var challenge = '30 Days Of JavaScript.';

function levelOne() {
  console.log(challenge);
  console.log(challenge.length);
  console.log(challenge.toUpperCase());
  console.log(challenge.toLowerCase());
  console.log(challenge.substr(3, 4));
  console.log(challenge.substr(3));
  console.log(challenge.includes('Script'));
  console.log(challenge.split());
  console.log(challenge.split(' '));
  console.log(('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon').split(','));
  console.log(challenge.replace('JavaScript', 'Python'));
  console.log(challenge.charAt(15));
  console.log(challenge.charCodeAt(11));
  console.log(challenge.indexOf('a'));
  console.log(challenge.lastIndexOf('a'));
  console.log(('You cannot end a sentence with because because because is a conjunction').indexOf('because'));
  console.log(('You cannot end a sentence with because because because is a conjunction').lastIndexOf('because'));
  console.log(('You cannot end a sentence with because because because is a conjunction').search('because'));
  console.log(challenge.trim(' '));
  console.log(challenge.startsWith('30'));
  console.log(challenge.endsWith('30'));
  console.log(challenge.match('a'));
  console.log(('30 Days Of').concat(' JavaScript'));
  console.log(challenge.repeat(2));
}

function levelTwo() {
  console.log('There is no exercise better for the heart than reaching down and lifting people up.');
  console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

  let num = '10';
  let flnum = '9.8'

  parseInt(num) == 10 ? console.log('equal') : console.log('not equal');
  parseInt(flnum) == 10 ? console.log('equal') : console.log(Math.round(flnum));

  console.log(('Python', 'Jargon').includes('on'));
  console.log(('I hope this course is not full of jargon.').includes('jargon'));

  console.log((Math.random()) * 100);
  console.log((Math.random()) * (100 - 50) + 50);
  console.log((Math.random()) * 255);

  let characters = 'JavaScript';

  console.log(characters.charAt(Math.random() * characters.length));

  console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

  let sentence = 'You cannot end a sentence with because because because is a conjunction'
  let firstPosition = sentence.indexOf('because')
  let lastPosition = sentence.lastIndexOf('because')
  console.log(firstPosition);
  console.log((sentence).substr(firstPosition, lastPosition - firstPosition + 7));
}

function levelThree() {
  console.log(('Love is the best thing in this world. Some found their love and some are still looking for their love.').match(/love/gi).length);
  console.log(('You cannot end a sentence with because because because is a conjunction').match(/because/gi).length);

  const cleanText = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

  const str = cleanText.replace(/[%$@&#?!;]/g, '')
  const num = 1
  const findMostFrequent = (str = '', num = 1) => {
    const strArr = str.split(' ');
    const map = {};
    strArr.forEach(word => {
      if (map.hasOwnProperty(word)) {
        map[word]++;
      } else {
        map[word] = 1;
      }
    });
    const frequencyArr = Object.keys(map).map(key => [key, map[key]]);
    frequencyArr.sort((a, b) => b[1] - a[1]);
    return frequencyArr.slice(0, num).map(el => el[0]);
  };
  console.log(findMostFrequent(str, num));
}

let salaryText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let salary = salaryText.match(/\d+/g);

console.log((salary).reduce((accumulator, curr) => parseInt(accumulator) + parseInt(curr)));

levelThree()
