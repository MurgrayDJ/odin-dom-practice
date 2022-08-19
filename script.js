
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


