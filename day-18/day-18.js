const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

function levelOne() {
  // Read the countries API using fetch and print the name of country, capital, languages, population and area.
  fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

function levelTwo() {
  //   Print out all the cat names in to catNames variable.
  fetch(catsAPI)
    .then((element) => element.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

function levelThree() {
  // Read the cats api and find the average weight of cat in metric unit.
  const getData = async () => {
    try {
      const response = await fetch(catsAPI);
      const cats = await response.json();
      let sum = 0;
      let count = 0;
      for (let weight of Object.entries(cats)) {
        sum += parseInt(weight[1].weight.metric);
        count++;
      }
      console.log((sum / count).toFixed(2));
    } catch (error) {
      console.log(error);
    }
  };

  getData();

  // Read the countries api and find out the 10 largest countries
  const extractData = async () => {
    try {
      const response = await fetch(countriesAPI);
      const countries = await response.json();
      let countriesLargest = [];
      for (let name of Object.entries(countries)) {
        if (name[1].name.length > 7) countriesLargest.push(name[1].name);
      }
      for (let i = 0; i < 10; i++) {
        console.log(countriesLargest[i]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  extractData();

  // Read the countries api and count total number of languages in the world used as officials.
  const countriesLang = async () => {
    try {
      const response = await fetch(countriesAPI);
      const countries = await response.json();
      let totalLanguages = 0;
      for (let name of Object.entries(countries)) {
        totalLanguages += name[1].languages.length;
      }
      console.log(totalLanguages);
    } catch (error) {
      console.log(error);
    }
  };

  countriesLang();
}
