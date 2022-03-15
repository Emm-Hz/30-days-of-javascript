function levelOneTwo() {
  // Create an Animal class. The class will have name, age, color, legs properties and create different methods
  class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
    getNameColor() {
      const nameAndColor = `${this.name} and ${this.color}`;
      return nameAndColor;
    }
    getAgeLegs() {
      const ageAndLegs = `${this.age} and ${this.legs}`;
      return ageAndLegs;
    }
  }

  // Create a Dog and Cat child class from the Animal Class.
  const dog = new Animal("Firulais", 2, "brown", 4);
  const cat = new Animal("Simba", 5, "orange", 4);

  console.log(dog);
  console.log(dog.getNameColor());
  console.log(dog.getAgeLegs());
  console.log(cat);
  console.log(cat.getNameColor());
  console.log(cat.getAgeLegs());

  // Override the method you create in Animal class
  class Species extends Animal {
    constructor(name, age, color, legs, species) {
      super(name, age, color, legs);
      this.species = species;
    }
  }

  const pet = new Species("Rex", 1, "gray", 4, "dog");

  console.log(pet);
}

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  getCount() {
    return ages.length;
  }
  getSum() {
    return ages.reduce((a, b) => a + b, 0);
  }
  getMin() {
    let minimun = ages[0];
    ages.forEach((value) => {
      if (value <= minimun) minimun = value;
    });
    return minimun;
  }
  getMax() {
    let maximun = ages[0];
    ages.forEach((value) => {
      if (value >= maximun) maximun = value;
    });
    return maximun;
  }
  getRange() {
    return this.getMax() - this.getMin();
  }
  getMean() {
    return Math.round(this.getSum() / this.getCount());
  }
  getMedian() {
    return parseInt(this.getSum() / this.getCount());
  }
  getMode() {
    let num = 0;
    let quantity = 0;
    for (let i = 0; i < ages.length; i++) {
      let check = ages[i];
      let count = 0;
      for (let j = i; j < ages.length; j++) {
        if (check == ages[j]) count++;
      }
      if (count > quantity) {
        num = check;
        quantity = count;
      }
    }
    return `Mode: ${num}, Count: ${quantity}`;
  }
  getVariance() {
    let mean = this.getSum() / this.getCount();
    let deviationSquare = 0;

    for (let i = 0; i < ages.length; i++) {
      deviationSquare += (ages[i] - mean) ** 2;
    }

    return deviationSquare / this.getCount();
  }
  getStd() {
    return Math.sqrt(this.getVariance());
  }
}

let count = new Statistics();

console.log(count.getCount());
console.log(count.getSum());
console.log(count.getMin());
console.log(count.getMax());
console.log(count.getRange());
console.log(count.getMean());
console.log(count.getMedian());
console.log(count.getMode());
console.log(count.getVariance().toFixed(1));
console.log(count.getStd().toFixed(1));
