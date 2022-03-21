function levelOne() {
    // Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
    const tagName = document.querySelector('p');
    console.log(tagName);

    // Get get each of the the paragraph using document.querySelector('#id') and by their id
    console.log(document.querySelector('#first'));
    console.log(document.querySelector('#second'));
    console.log(document.querySelector('#third'));
    console.log(document.querySelector('#fourth'));

    // Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
    const nodeTag = document.querySelectorAll('p');
    console.log(nodeTag);

    // Loop through the nodeList and get the text content of each paragraph
    nodeTag.forEach((element) => console.log(element));

    // Set a text content to paragraph the fourth paragraph,Fourth Paragraph
    nodeTag[3].textContent = 'Fourth Paragraph';

    // Set id and class attribute for all the paragraphs using different attribute setting methods
    nodeTag[1].className = 'title';

    nodeTag[2].classList.add('title', 'header');
}

function levelTwo() {
    // Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
    const paragraph = document.querySelectorAll('p');

    paragraph.forEach((element) => {
        element.style.fontSize = '18px';
        element.style.fontFamily = 'sans-serif';
        element.style.background = '#443';
        element.style.border = '3px solid orange';
    });
    // Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
    paragraph.forEach((element, index) => {
        if (index % 2 === 0) {
            element.style.color = 'lightgreen';
        } else {
            element.style.color = 'red';
        }
    });
}

function levelThree() {
    // Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

    // The year color is changing every 1 second
    // The date and time background color is changing every on seconds

    const tagName = document.querySelector('h1');
    tagName.innerHTML = tagName.innerHTML.replace('2020', `<span class="change">2020</span>`);
    setInterval(changeColor, 1000);

    function changeColor() {
        let text = document.querySelector('.change');
        let colors = ['tea', 'red', 'green', 'violet', 'olive'];
        let number = parseInt(Math.random() * (5 - 0) + 0);

        text.style.color = `${colors[number]}`;
    }

    let newTag = document.createElement('h3');
    let date = new Date();
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    console.log(date.getDay());

    newTag.innerHTML = `${
        months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    document.querySelector('h2').appendChild(newTag);

    setInterval(changeBackground, 1000);

    function changeBackground() {
        let element = document.querySelector('h3');
        let colors = ['tea', 'red', 'green', 'violet', 'olive'];
        let number = parseInt(Math.random() * (5 - 0) + 0);

        element.style.background = `${colors[number]}`;
    }
}
