
//Odin project code
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
//End of Odin project code

//Question 1
const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style['color'] = "red";
container.appendChild(paragraph);

//Question 2
const heading3 = document.createElement('h3');
heading3.textContent = "I'm a blue h3!";
heading3.style.color = 'blue';
document.body.appendChild(heading3);

//Question 3
const divContainer = document.createElement('div');
divContainer.style.borderStyle = 'solid';
divContainer.style.backgroundColor = 'pink';
document.body.appendChild(divContainer);

//------3.1
const heading1 = document.createElement('h1');
heading1.textContent = "I'm in a div";
divContainer.appendChild(heading1);

//------3.2
const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!";
divContainer.appendChild(paragraph2);
